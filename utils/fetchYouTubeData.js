const axios = require('axios');

const fetchYouTubeData = async () => {
  try {
    const response = await axios.get('https://api.crstlnz.my.id/api/jkt48_youtube', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Origin': 'https://your-vercel-domain.vercel.app',
        'Referer': 'https://your-vercel-domain.vercel.app/',
      },
      // Increase timeout to handle CloudFlare challenges
      timeout: 10000,
      // Follow redirects
      maxRedirects: 5,
    });

    // Check if response is valid
    if (!response.data) {
      throw new Error('Empty response received');
    }

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    
    // Improved error handling
    const errorResponse = {
      success: false,
      data: {
        status: error.response?.status || 500,
        message: 'Error fetching data from API',
        error: error.message || 'An unknown error occurred',
        details: error.response?.data || null,
      },
    };

    // If this is a CloudFlare error, add more context
    if (error.response?.status === 403) {
      errorResponse.data.cloudflareProtection = true;
      errorResponse.data.message = 'Request blocked by CloudFlare protection';
    }

    return errorResponse;
  }
};

module.exports = fetchYouTubeData;