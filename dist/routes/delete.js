'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');
var qs = require('querystring');

/* 删除文件 */
router.post('/', function (req, res, next) {
    var reqBody = req.body;
    var siteName = reqBody.siteName;
    var mainType = reqBody.files[0].mainType;
    var filesArr = reqBody.files.map(function (item) {
        return item.resName;
    });
    console.log(filesArr);
    var options = {
        host: siteName,
        port: 3000,
        path: '/delete',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: 'POST'
    };
    console.log(mainType, filesArr, qs.stringify({
        mainType: mainType,
        files: filesArr
    }));
    var requ = http.request(options, function (resp) {
        resp.on('data', function (chunk) {
            console.log(JSON.parse(chunk));
            res.send(JSON.parse(chunk));
        });
    });
    requ.write(qs.stringify({
        mainType: mainType,
        files: filesArr
    }));
    requ.end();
});

module.exports = router;
//# sourceMappingURL=delete.js.map