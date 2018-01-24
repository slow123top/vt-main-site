'use strict';

var User = require('./user');
module.exports = function (obj) {
    var user = new User({
        id: obj.id,
        username: obj.username,
        password: obj.password,
        type: obj.type
    });
    return new Promise(function (resolve, reject) {
        user.save(function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
//# sourceMappingURL=insert.js.map