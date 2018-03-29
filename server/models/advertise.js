var  mongoose = require('mongoose');
var Schema = mongoose.Schema;
var advertiseSchema = Schema({
  title: String,
  content: String,
  image: String,
  date: {type:Date, default:Date.now}
})
module.exports = mongoose.model('Advertise', advertiseSchema);
