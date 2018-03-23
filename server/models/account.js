var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var accountSchema = Schema({
  username: String,
  password: String,
  userID: { type: Schema.Types.ObjectId, ref: 'User' }
})
module.exports = mongoose.model('Account', accountSchema);
