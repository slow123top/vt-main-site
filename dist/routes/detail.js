'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');
var qs = require('querystring');
/* GET users listing. */
router.post('/', function (req, res, next) {
    var detail = req.body.detail;
    var mainType = detail.mainType;
    var subType = detail.subType;
    var options = {
        host: detail.address.replace('http://', ''),
        port: 3000,
        path: '/detail',
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
    requ.write(qs.stringify({
        mainType: mainType,
        subType: subType
    }));
    requ.end();
});

module.exports = router;
//# sourceMappingURL=detail.js.map