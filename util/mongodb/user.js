/*创建user实例*/
const mongoose = require('./mongodb')
let Schema = mongoose.Schema
//创建user 模型
let userSchema = new Schema({
    id: {type: String},
    username: {type: String},
    password: {type: String},
    type: {type: String}
})
module.exports = mongoose.model('users', userSchema)
