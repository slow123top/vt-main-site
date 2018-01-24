'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // var express = require('express');

var http = require('http');

/* 上传文件. */
router.post('/', function (req, res, next) {
    var detail = req.body.detail;
    var postData = detail.mainType + '-' + detail.subType;
    var options = {
        host: detail.address.replace('http://', ''),
        port: 8080,
        path: '/api/baseStation15/detailFile',
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
    requ.write(postData);
    requ.end();
});

module.exports = router;
//# sourceMappingURL=add.js.map