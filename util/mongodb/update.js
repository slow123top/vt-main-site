const User = require('./user')
module.exports = function (condition, updateObj) {
    return new Promise(function (resolve, reject) {
        User.update(condition, updateObj, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })

}