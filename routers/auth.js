const express = require("express");
const app = express.Router();
module.exports = app;

app.get('/signup', (req, res) => {
    console.log(req.body);

    res.send({'status': 'success'})
})
