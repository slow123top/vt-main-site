const express = require('express');
const router = express.Router();
const createToken = require('../../util/createtoken')
const findData = require('../../util/mongodb/find')
/* login. */
router.post('/', function (req, res, next) {

    // 学会解构赋值
    let reqUsername = req.body.username
    console.log(reqUsername)
    //    用户名和密码正确  返回正确信息  并创建token
    findData(reqUsername).then((param) => {
        let userInfo = param[0]
        let {username, password, type, avataraddr, introduction, career} = userInfo
        console.log(userInfo)
        res.json({
            status: 'SUCCESS',
            message: '获取用户信息成功',
            data: {
                username: username,
                token: createToken(username),
                type: type,
                avatarAddr: avataraddr,
                introduction: introduction,
                career: career
            }
        })
        // console.log()

    }).catch((param) => {

        res.json({
            status: 'ERROR',
            message: param
        })
    })

});

module.exports = router;