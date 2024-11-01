const express = require('express');
const youtubeRoutes = require('./routes/youtube');

const app = express();
const PORT = 3000;

// Menggunakan route youtube
app.use('/api/youtubeintens', youtubeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
