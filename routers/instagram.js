const express = require("express");
const models = require("../models")
const app = express.Router();

module.exports = app;

app.post('/', async (req, res) => {
    const data = req.body;

    const reqData = ['photo', 'direction', 'order'];

    // 필요한 데이터가 다 담겨있는지 확인
    let isCheckedData = true;
    _.each(reqData, e => {
        if (!(e in data)) {
            return isCheckedData = false;
        }
    });

    // 데이터 불충분
    if (!isCheckedData) {
        return res.status(400).end();
    }

    await models.Instagram.destroy()

    await models.Instagram.create({
        photo: data.photo,
        direction: data.direction,
        order: data.order,
    });

    return res.send({'instagram': models.Instagram.findAll()});
});

app.get('/instagram', async (req, res) => {

});
