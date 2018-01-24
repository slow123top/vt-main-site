// 验证token
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.headers['Authorization']) {

        let token = req.headers['Authorization'].split(' ')[1]
        console.log(req.headers['Authorization'])
        //    解构token
        let decoded = jwt.decode(token)
        console.log(decoded)
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

    next()
}