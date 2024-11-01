const express = require('express');
const router = express.Router();
const fetchYouTubeData = require('../utils/fetchYouTubeData');

router.get('/', async (req, res) => {
  try {
    const data = await fetchYouTubeData();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch YouTube data' });
  }
});

module.exports = router;
