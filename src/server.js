const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const proxyMiddleware = require('./middleware/proxy.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(config.proxyPath, proxyMiddleware);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(config.port, () => {
    console.log(`Proxy server running on port ${config.port}`);
});