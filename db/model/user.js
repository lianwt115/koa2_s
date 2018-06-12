/**
 * 用户信息
 */
var mongoose = require('../db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    userpwd: {type: String,default:123456},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date,default:Date.now()}                       //最近登录时间
});

module.exports = mongoose.model('User',UserSchema);