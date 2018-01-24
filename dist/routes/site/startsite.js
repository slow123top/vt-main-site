'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
router.post('/', function (req, res, next) {
    var site = req.body.site;
    var options = {
        host: site,
        port: 3000,
        path: '/startSite',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: 'POST'
    };
    var requ = http.request(options, function (resp) {
        resp.on('data', function (chunk) {
            res.send(JSON.parse(chunk));
            console.log(JSON.parse(chunk));
        });
    });
    requ.end();
});

module.exports = router;
//# sourceMappingURL=startsite.js.map