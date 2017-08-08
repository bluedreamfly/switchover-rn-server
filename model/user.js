const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: ObjectId, //id
  name: String, //姓名
  nickname: String, //昵称
  phone: String, //手机号
  isAuth: Boolean, //是否认证过
  authStep: Number, //认证到哪个步骤了,
  account: { type: Schema.ObjectId, ref: 'Account' }
});

module.exports = mongoose.model('User', UserSchema);