const axios = require('axios');

const fetchYouTubeData = async () => {
  try {
    const response = await axios.get('https://api.crstlnz.my.id/api/jkt48_youtube');

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);

    return {
      success: false,
      data: {
        status: error.response ? error.response.status : 500,
        message: error.response ? 'Error fetching data from API' : 'Internal Server Error',
        error: error.message || 'An unknown error occurred.',
      },
    };
  }
};

module.exports = fetchYouTubeData;
