// var express = require('express');
import express from 'express'
var router = express.Router();
let http = require('http')

/* 上传文件. */
router.post('/', function (req, res, next) {
    let detail = req.body.detail
    let postData = detail.mainType + '-' + detail.subType
    let options = {
        host: detail.address.replace('http://', ''),
        port: 8080,
        path: '/api/baseStation15/detailFile',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        method: 'POST',
    };
    let requ = http.request(options, resp => {
        resp.on('data', function (chunk) {
            res.send(JSON.parse(chunk));
        });
    })
    requ.write(postData)
    requ.end()
});

module.exports = router;
