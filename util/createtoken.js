// 创建token
const jwt = require('jsonwebtoken')

module.exports = function (username) {
    const token = jwt.sign({
            username: username
        },
        'secret',
        {
            expiresIn: '1h'  //测试时间为10s
        }
    )
    return token
}
