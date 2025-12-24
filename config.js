// config.js - NEVER COMMIT THIS TO GIT!
const API_CONFIG = {
    INFOWAY: {
        BASE_URL: 'https://terminology.infoway-inforoute.ca/api',
        // API_KEY will be set from environment or user input
        API_KEY: null
    },
    SNOWSTORM: {
        BASE_URL: 'https://snowstorm.ihtsdotools.org/snowstorm/snomed-ct'
    }
};

// Load key from user input or environment
function setInfowayApiKey(key) {
    API_CONFIG.INFOWAY.API_KEY = key;
    localStorage.setItem('infoway_api_key', key); // Optional: store in browser
}