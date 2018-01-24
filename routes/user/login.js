const express = require('express');
const router = express.Router();
const createToken = require('../../util/createtoken')
const findData = require('../../util/mongodb/find')


/* login. */
router.post('/', function (req, res, next) {
    // console.log(req.headers['authorization']);
    // let username = req.body.username
    // let password = req.body.password
    // 学会解构赋值
    let {username, password} = req.body

    if (!username) {

        res.json({
            status: 'ERROR',
            message: '此用户不存在！'
        })
    } else {
        //    用户名和密码正确  返回正确信息  并创建token
        // let username = req.body.username
        findData(username).then((param) => {
            let userInfo = param[0]
            if (username === userInfo['username'] && password === userInfo['password']) {
                res.json({
                    status: 'SUCCESS',
                    message: '登陆成功',
                    username: req.body.username,
                    token: createToken(username)
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