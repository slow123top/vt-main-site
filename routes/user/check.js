const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const http = require('http')
const checkToken = require('../../util/checktoken')


/* login. */
router.get('/', function (req, res, next) {
    if (req.headers['authorization']) {

        let token = req.headers['authorization'].split(' ')[1]
        //    解构token
        let decoded = jwt.decode(token)
        //测试是否超时
        if (token && decoded.exp <= Date.now() / 1000) {
            return res.json({
                status: 'ERROR',
                token: false,
                error: '登录超时，请重新登录！'
            })
        } else {
            return res.json({
                status: 'SUCCESS',
                token: true
            })
        }
    }

    // next()
});

module.exports = router;