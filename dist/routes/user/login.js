'use strict';

var express = require('express');
var router = express.Router();
var createToken = require('../../util/createtoken');
var findData = require('../../util/mongodb/find');

/* login. */
router.post('/', function (req, res, next) {
    // console.log(req.headers['authorization']);
    // let username = req.body.username
    // let password = req.body.password
    // 学会解构赋值
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;


    if (!username) {

        res.json({
            status: 'ERROR',
            message: '此用户不存在！'
        });
    } else {
        //    用户名和密码正确  返回正确信息  并创建token
        // let username = req.body.username
        findData(username).then(function (param) {
            var userInfo = param[0];
            if (username === userInfo['username'] && password === userInfo['password']) {
                res.json({
                    status: 'SUCCESS',
                    message: '登陆成功',
                    username: req.body.username,
                    token: createToken(username)
                });
            } else {
                res.json({
                    status: 'ERROR',
                    message: '用户名或者密码错误'
                });
            }
        }).catch(function (param) {
            console.log(param);
        });
    }
});

module.exports = router;
//# sourceMappingURL=login.js.map