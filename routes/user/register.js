const express = require('express');
const router = express.Router();
const insertData = require('../../util/mongodb/insert')
const getUuid = require('../../util/uuid')
const {getMd5} = require('../../util/crypto')

/* login. */
router.post('/', function (req, res, next) {
    //ES6 字符串解构赋值
    let {username, password, checkPassword, userType} = req.body
    if (username === '' || password === '' || checkPassword === '') {
        res.json({
            status: 'ERROR',
            message: '注册信息不完整'
        })
    } else if (!/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(password)) {
        res.json({
            status: 'ERROR',
            message: '密码格式不正确'
        })
    } else if (password !== checkPassword) {
        res.json({
            status: 'ERROR',
            message: '两次密码输入不一致'
        })
    } else {
        insertData({id: getUuid(), username: username, password: getMd5(password), type: userType})
            .then((param) => {
                res.json({
                    status: 'SUCCESS',
                    message: '注册成功'
                })
            })
            .catch((param) => {
                console.log(param)
            })


    }
});

module.exports = router;