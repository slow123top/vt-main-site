'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');
var qs = require('querystring');
/* GET users listing. */

router.post('/', function (req, res, next) {
    var ra = req.body.ra;
    var de = req.body.de;
    var radius = req.body.radius;
    console.log(req.body);
    var options_1 = {
        host: '192.168.11.24',
        port: 3000,
        path: '/scs',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: 'POST'
    };
    var options_2 = {
        host: '192.168.9.179',
        // host: '192.168.100.155',
        port: 3000,
        path: '/scs'
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        // }
    };
    var options_3 = {
        host: '192.168.9.190',
        // host: '192.168.100.229',
        port: 3000,
        path: '/scs'
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        // }
    };
    var options_4 = {
        host: '192.168.9.217',
        // host: '192.168.100.154',
        port: 3000,
        path: '/scs',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };
    var options_5 = {
        host: '192.168.9.218',
        // host: '192.168.100.231',
        port: 3000,
        path: '/scs'
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        // }
    };
    var requ = http.request(options_1, function (resp) {
        resp.on('data', function (chunk) {
            res.send(JSON.parse(chunk));
        });
    });
    requ.write(qs.stringify({
        ra: ra,
        de: de,
        radius: radius
    }));
    requ.end();
});

module.exports = router;
//# sourceMappingURL=scs.js.map