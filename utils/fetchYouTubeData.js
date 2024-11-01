const axios = require('axios');

const fetchYouTubeData = async () => {
  try {
    const response = await axios.get('https://api.crstlnz.my.id/api/jkt48_youtube');
    return {
      status: 200,
      data: response.data,
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    
    return {
      status: 500,
      message: 'Internal Server Error',
      error: error.message || 'An unknown error occurred.',
    };
  }
};

module.exports = fetchYouTubeData;
