var express = require('express');
var router = express.Router();
let http = require('http')

/* GET users listing. */
router.post('/', function (req, res, next) {
    let httpReq
    let temp = []
    let sites = req.body.sites
    let options = {
        host: '',
        port: 8080,
        path: '/api/baseStation15/stationInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        method: 'GET',
    };
    new Promise(function (resolve, reject) {
        options.host = sites[0].replace('http://', '');
        httpReq = http.request(options, resp => {
            resp.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                temp.push(JSON.parse(chunk));
                resolve();
            });
        })
        httpReq.end();
        // errorEvent(options_1.host, httpReq,res)
    })
        .then(function () {
            return new Promise(function (resolve, reject) {
                options.host = sites[1].replace('http://', '');
                httpReq = http.request(options, resp => {
                    resp.on('data', function (chunk) {
                        console.log('BODY: ' + chunk);
                        temp.push(JSON.parse(chunk));
                        resolve();
                    });

                })
                httpReq.end();
                // errorEvent(options_2.host, httpReq, res)
            })
        })
        .then(function () {
            return new Promise(function (resolve, reject) {
                options.host = sites[2].replace('http://', '');
                httpReq = http.request(options, resp => {
                    resp.on('data', function (chunk) {
                        console.log('BODY: ' + chunk);
                        temp.push(JSON.parse(chunk));
                        resolve();
                    });
                })
                httpReq.end();
                // errorEvent(options_3.host, httpReq, res)
            })
        })
        .then(function () {
            return new Promise(function (resolve, reject) {
                options.host = sites[3].replace('http://', '');
                httpReq = http.request(options, resp => {
                    resp.on('data', function (chunk) {
                        console.log('BODY: ' + chunk);
                        temp.push(JSON.parse(chunk));
                        resolve();
                    });

                })
                httpReq.end();
                // errorEvent(options_4.host, httpReq, res)
            })
        })
        .then(function () {
            options.host = sites[0].replace('http://', '');
            httpReq = http.request(options, resp => {
                resp.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);
                    temp.push(JSON.parse(chunk));
                    res.send(temp);
                });
                // errorEvent(resp)
            })
            httpReq.end();
            // errorEvent(options_5.host, httpReq, res)
        })
});

module.exports = router;
