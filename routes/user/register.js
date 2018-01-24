const express = require('express');
const router = express.Router();
const insertData = require('../../util/mongodb/insert')
const getUuid = require('../../util/uuid')


/* login. */
router.post('/', function (req, res, next) {
    // let username = req.body.username
    // let password = req.body.password
    // let checkPassword = req.body.checkPassword
    let {username, password, checkPassword} = req.body
    console.log(req.body)
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
        insertData({id: getUuid(), username: username, password: password, type: 0})
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