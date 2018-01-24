'use strict';

/*查询用户信息  用于登录*/
var User = require('./user');
module.exports = function (username) {
    var whereStr = {
        username: username
    };
    var opt = {
        id: 0
    };
    return new Promise(function (resolve, reject) {
        User.find(whereStr, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
//# sourceMappingURL=find.js.map