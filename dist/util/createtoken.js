'use strict';

// 创建token
var jwt = require('jsonwebtoken');

module.exports = function (username) {
    var token = jwt.sign({
        username: username
    }, 'secret', {
        expiresIn: '1h' //测试时间为10s
    });
    return token;
};
//# sourceMappingURL=createtoken.js.map