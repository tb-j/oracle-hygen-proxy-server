require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5005,
    targetUrl: process.env.TARGET_URL || 'https://api.heygen.com/v1',
    proxyPath: process.env.PROXY_PATH || '/api'
};
