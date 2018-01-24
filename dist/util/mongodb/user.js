'use strict';

/*创建user实例*/
var mongoose = require('./mongodb');
var Schema = mongoose.Schema;
//创建user 模型
var userSchema = new Schema({
    id: { type: String },
    username: { type: String },
    password: { type: String },
    type: { type: Number }
});
module.exports = mongoose.model('users', userSchema);
//# sourceMappingURL=user.js.map