const express = require("express");
const models = require("../models")
const _ = require("lodash");
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

    await models.Instagram.destroy({where: {order: data.order}});

    await models.Instagram.create({
        photo: data.photo,
        direction: data.direction,
        order: data.order,
    });

    return res.end();
});

app.get('/', async (req, res) => {
    const instagram = await models.Instagram.findAll();
    const photoList = [];
    const directionList = [];

    _.each(instagram, data => {
        photoList.push(data.photo);
        directionList.push(data.direction);
    })

    res.send({
        'photoList': photoList,
        'directionList': directionList
    });
});
