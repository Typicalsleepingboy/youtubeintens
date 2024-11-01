const axios = require('axios');

const fetchYouTubeData = async () => {
  try {
    const response = await axios.get('https://api.crstlnz.my.id/api/jkt48_youtube');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

module.exports = fetchYouTubeData;
