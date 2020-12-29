const express = require('express');
const app = express.Router();

app.get('/ping', (req, res) => {
    res.send('ping');
});

module.exports = app;