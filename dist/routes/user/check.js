'use strict';

var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
var http = require('http');
var checkToken = require('../../util/checktoken');

/* login. */
router.get('/', function (req, res, next) {
    if (req.headers['authorization']) {

        var token = req.headers['authorization'].split(' ')[1];
        //    解构token
        var decoded = jwt.decode(token);
        //测试是否超时
        if (token && decoded.exp <= Date.now() / 1000) {
            return res.json({
                status: 'ERROR',
                token: false,
                error: '登录超时，请重新登录！'
            });
        } else {
            return res.json({
                status: 'SUCCESS',
                token: true
            });
        }
    }

    // next()
});

module.exports = router;
//# sourceMappingURL=check.js.map