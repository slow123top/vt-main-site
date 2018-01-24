'use strict';

/*创建连接数据库对象*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');
//
var db = mongoose.connection;
db.on('error', function (err) {
    console.log('数据库连接失败' + err);
});
db.on('connected', function () {
    console.log('数据库连接成功');
});

db.on('disconnected', function () {
    console.log('数据库连接断开');
});

module.exports = mongoose;
//# sourceMappingURL=mongodb.js.map