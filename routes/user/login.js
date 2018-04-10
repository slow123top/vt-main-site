const express = require('express');
const router = express.Router();
const createToken = require('../../util/createtoken')
const findData = require('../../util/mongodb/find')
const {getMd5} = require('../../util/crypto')

/* login. */
router.post('/', function (req, res, next) {

    // 学会解构赋值
    let {username, password, userType} = req.body
    if (!username) {
        res.json({
            status: 'ERROR',
            message: '此用户不存在！'
        })
    } else {
        //    用户名和密码正确  返回正确信息  并创建token
        findData(username).then((param) => {
            let userInfo = param[0]
            let dbUsername = userInfo['username'], dbPassword = userInfo['password'], dbType = userInfo['type']
            if (userType !== dbType) {
                res.json({
                    status: 'ERROR',
                    message: '此类用户不存在',
                })
            } else if (username === dbUsername && getMd5(password) === dbPassword && userType === dbType) {
                res.json({
                    status: 'SUCCESS',
                    message: '登陆成功',
                    username: req.body.username,
                    token: createToken(username),
                    type: userType,
                    avatarAddr: userInfo['avataraddr'],
                    introduction: userInfo['introduction'],
                    career: userInfo['career']
                })
            } else {
                res.json({
                    status: 'ERROR',
                    message: '用户名或者密码错误'
                })
            }
        })
            .catch((param) => {
                console.log(param)
            })
    }
});

module.exports = router;