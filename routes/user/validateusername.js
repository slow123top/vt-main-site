const express = require('express');
const router = express.Router();
const findData = require('../../util/mongodb/find')
router.post('/', function (req, res, next) {
    let username = req.body.username
    findData(username).then((param) => {
        if (param.length) {
            res.json({
                status: 'ERROR',
                message: '该用户名已存在，请重新输入'
            })
        } else {
            res.json({
                status: 'SUCCESS'
            })
        }
    })
})
module.exports = router;