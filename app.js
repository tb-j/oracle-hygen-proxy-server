const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({ 
    target: 'https://api.heygen.com/v1', //original url
    changeOrigin: true, 
    secure: true,
    
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(5005);