const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = Schema({
  id: Schema.ObjectId, //id
  phone: String
});


module.exports = mongoose.model('Account', AccountSchema);