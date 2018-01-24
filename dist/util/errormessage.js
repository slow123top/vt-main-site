'use strict';

module.exports = function (username) {
    var token = jwt.sign({
        username: username
    }, 'secret', {
        expiresIn: '10s' //测试时间为10s
    });
    return token;
};
//# sourceMappingURL=errormessage.js.map