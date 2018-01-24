'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
router.post('/', function (req, res, next) {
    var sites = req.body.sites;
    var options = {
        host: detail.address.replace('http://', ''),
        port: 8080,
        path: '/api/baseStation15/stationInfo',
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
//# sourceMappingURL=sitestatus.js.map