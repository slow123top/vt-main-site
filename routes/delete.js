var express = require('express');
var router = express.Router();
let http = require('http')
let qs = require('querystring')

/* 删除文件 */
router.post('/', function (req, res, next) {
    let reqBody = req.body
    let siteName = reqBody.siteName
    let mainType = reqBody.files[0].mainType
    let filesArr = reqBody.files.map((item) => {
        return item.resName
    })
    console.log(filesArr)
    let options = {
        host: siteName,
        port: 3000,
        path: '/delete',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            // 'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST',
    };
    console.log(mainType, filesArr,qs.stringify({
        mainType: mainType,
        files: filesArr
    }))
    let requ = http.request(options, resp => {
        resp.on('data', function (chunk) {
            console.log(JSON.parse(chunk))
            res.send(JSON.parse(chunk));
        });
    })
    requ.write(qs.stringify({
        mainType: mainType,
        files: filesArr
    }))
    requ.end()
});

module.exports = router;
