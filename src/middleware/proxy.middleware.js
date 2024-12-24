const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config/config');

const proxyMiddleware = createProxyMiddleware({ 
    target: config.targetUrl,
    changeOrigin: true,
    secure: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
});

module.exports = proxyMiddleware;