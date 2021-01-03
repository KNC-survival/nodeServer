const express = require('express');
const {httpGet} = require("../util/httpRequest");

const app = express.Router();


app.get('/photo', async (req, res) => {
    const response = await httpGet('https://graph.instagram.com/17841406922966904/media', {
        fields: 'media_url,permalink',
        access_token: 'IGQVJYaXcwMkJVU09ZAWG1rWDJVVzUzX0tHY09PWG5mOGdsdDFFZAW9uNDVsWXRadUVWWnZAmOEQwSE5pMGV5eGVfMUM0R1NfQzU3SWJBNDhzN3ZAIZAFNCbkNjOWtZAck1RSl8wSEVweDN1cHdZAMkNncVJjdE1iVFFtckZA6WVhr'
    })
    const imageArr = [];
    const instaPathArr = [];
    console.log(response.data)
    for (let i of response.data) {
        imageArr.push(i['media_url']);
        instaPathArr.push(i['permalink']);
    }

    res.send({
        imageUrl: imageArr,
        instaUrl: instaPathArr
    });
});

module.exports = app;