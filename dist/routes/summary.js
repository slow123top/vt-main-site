'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');
var options_1 = {
    host: '192.168.11.24',
    port: 3000,
    path: '/summary'
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
};
var options_2 = {
    host: '192.168.9.179',
    // host: '192.168.100.155',
    port: 3000,
    path: '/summary'
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
};
var options_3 = {
    host: '192.168.9.190',
    // host: '192.168.100.229',
    port: 3000,
    path: '/summary'
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
};
var options_4 = {
    host: '192.168.9.217',
    // host: '192.168.100.154',
    port: 3000,
    path: '/summary',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};
var options_5 = {
    host: '192.168.9.218',
    // host: '192.168.100.231',
    port: 3000,
    path: '/summary'
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
};
var httpReq = void 0;
var temp = [];

function errorEvent(ip, resp, res) {
    resp.on('error', function () {
        res.json({
            status: 'ERROR',
            message: '服务器' + ip + '连接异常！'
        });
    });
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    temp.splice(0, temp.length);
    new Promise(function (resolve, reject) {
        httpReq = http.request(options_1, function (resp) {
            resp.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                temp.push(JSON.parse(chunk));
                resolve();
            });
        });
        httpReq.end();
        errorEvent(options_1.host, httpReq, res);
    }).then(function () {
        return new Promise(function (resolve, reject) {
            httpReq = http.request(options_2, function (resp) {
                resp.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);
                    temp.push(JSON.parse(chunk));
                    resolve();
                });
            });
            httpReq.end();
            errorEvent(options_2.host, httpReq, res);
        });
    }).then(function () {
        return new Promise(function (resolve, reject) {
            httpReq = http.request(options_3, function (resp) {
                resp.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);
                    temp.push(JSON.parse(chunk));
                    resolve();
                });
            });
            httpReq.end();
            errorEvent(options_3.host, httpReq, res);
        });
    }).then(function () {
        return new Promise(function (resolve, reject) {
            httpReq = http.request(options_4, function (resp) {
                resp.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);
                    temp.push(JSON.parse(chunk));
                    resolve();
                });
            });
            httpReq.end();
            errorEvent(options_4.host, httpReq, res);
        });
    }).then(function () {
        httpReq = http.request(options_5, function (resp) {
            resp.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                temp.push(JSON.parse(chunk));
                res.json({
                    status: 'SUCCESS',
                    message: '成功获取资源总表',
                    data: temp
                });
            });
            // errorEvent(resp)
        });
        httpReq.end();
        errorEvent(options_5.host, httpReq, res);
    });
});
module.exports = router;
//# sourceMappingURL=summary.js.map