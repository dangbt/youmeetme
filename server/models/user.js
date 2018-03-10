var  mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
  id: String,
  name: String,
  age: String,
  role: { type: Schema.Types.ObjectId, ref: 'Role' }
})
module.exports = mongoose.model('User', userSchema);
