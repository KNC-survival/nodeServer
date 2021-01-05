const axios = require("axios");

exports.httpGet = function (url, data) {
    return axios.get(url,
        {
            params: data,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.66'
            }
        }).then(function (response) {
        return response;
    })
        .catch(function (error) {
            return error;
        })
}

