const express = require('express');
const axios = require("axios");
const app = express.Router();

function axiosGet() {
    return axios.get('https://graph.instagram.com/17841406922966904/media',
        {
            params: {
                fields: 'media_url,permalink',
                access_token: 'IGQVJVdkxYcHFYZAGpLUHNkR2wtUUh1ZAjFsN241UUJaMGJ3OHRvNWozLVAxWXkxVV9WeTYyTldoMDFDLW1MSFRua0tOLTBKN3N6UDhhU19vUWlzVlhwcUoxOUJMS25nNElIVzJJSFNWaVlrWkd1b0JkM0ExNjNRekY5VGJR'
            }
        }).then(function (response) {
            console.log('res', response.data);
        return response.data;
    })
        .catch(function (error) {
            console.log('err', error);
            return error;
        })
}

app.get('/photo', async (req, res) => {
    const result = await axiosGet()
    res.send(result);
});

module.exports = app;