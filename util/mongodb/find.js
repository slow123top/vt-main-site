/*查询用户信息  用于登录*/
const User = require('./user')
module.exports = function (username) {
    let whereStr = {
        username: username
    }
    let opt = {
        id: 0
    }
    return new Promise(function (resolve, reject) {
        User.find(whereStr, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })

}


