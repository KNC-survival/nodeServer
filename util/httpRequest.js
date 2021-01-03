const axios = require("axios");

exports.httpGet = function (url, data) {
    return axios.get(url,
        {
            params: data,
        }).then(function (response) {
        return response.data;
    })
        .catch(function (error) {
            return error;
        })
}

