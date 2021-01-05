const express = require("express");
const models = require("../models")
const app = express.Router();
const _ = require("lodash")
module.exports = app;

app.post('/signup', async (req, res) => {
    const data = req.body;
    const reqData = ['user_name', 'user_age'];

    // 필요한 데이터가 다 담겨있는지 확인
    let isCheckedData = true;
    _.each(reqData, e => {
        if (!(e in data)) {
            return isCheckedData = false;
        }
    })

    // 데이터 불충분
    if (!isCheckedData) {
        return res.status(400).end();
    }

    models.User.create({
        user_name: data.user_name,
        user_age: data.user_age,
    });

    return res.send({'users': await models.User.findAll()});
})
