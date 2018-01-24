var express = require('express');
var router = express.Router();
let http = require('http')
const qs = require('querystring')
const multer = require('multer')
const fs = require('fs')
const bf = require('buffer')
/* GET users listing. */
let upload = multer()
router.post('/', upload.array('file'), function (req, res, next) {
    // let detail = req.body.detail
    // let mainType = detail.mainType
    // let subType = detail.subType
    console.log(req.files)
    let filesArr = req.files;
    let options = {
        host: '192.168.11.24',
        port: 3000,
        path: '/upload',
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
    let temp = []
    filesArr.forEach((item) => {
        temp.push({
            fileName: item.originalname,
            // content: bf.toString(item.buffer)
        })
    })
    console.log(filesArr[0].buffer.toString())
    requ.write(qs.stringify({
        fileName: filesArr[0].originalname,
        // fileContent: filesArr[0].buffer
    }))
    requ.end(filesArr[0].buffer)
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
