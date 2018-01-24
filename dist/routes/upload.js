'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');
var qs = require('querystring');
var multer = require('multer');
var fs = require('fs');
var bf = require('buffer');
/* GET users listing. */
var upload = multer();
router.post('/', upload.array('file'), function (req, res, next) {
    // let detail = req.body.detail
    // let mainType = detail.mainType
    // let subType = detail.subType
    console.log(req.files);
    var filesArr = req.files;
    var options = {
        host: '192.168.11.24',
        port: 3000,
        path: '/upload',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: 'POST'
    };
    var requ = http.request(options, function (resp) {
        resp.on('data', function (chunk) {
            res.send(JSON.parse(chunk));
        });
    });
    var temp = [];
    filesArr.forEach(function (item) {
        temp.push({
            fileName: item.originalname
        });
    });
    console.log(filesArr[0].buffer.toString());
    requ.write(qs.stringify({
        fileName: filesArr[0].originalname
    }));
    requ.end(filesArr[0].buffer);
    // filesArr.forEach(item => {
    //     new Promise((resolve, reject) => {
    //         fs.readFile(`./upload/${item.filename}`, (err, data) => {
    //             if (err) {
    //                 reject(err)
    //             } else {
    //                 resolve(data)
    //             }
    //         })
    //     }).then((param) => {
    //         fs.writeFile(`./${item.originalname}`, param, err => {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 console.log('文件写入成功')
    //             }
    //         })
    //     }).catch((e) => {
    //         console.log(e)
    //     })
    //
    // })
    // let options = {
    //     host: detail.address.replace('http://', ''),
    //     port: 3000,
    //     path: '/detail',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //     },
    //     method: 'POST',
    // };
    // let requ = http.request(options, resp => {
    //     resp.on('data', function (chunk) {
    //         res.send(JSON.parse(chunk));
    //     });
    // })
    // requ.write(qs.stringify({
    //     mainType: mainType,
    //     subType: subType
    // }))
    // requ.end()
});

module.exports = router;
//# sourceMappingURL=upload.js.map