var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = Schema({
    userID: String,
    fullName: String,
    date: {type:Date, default:Date.now},
    image: String,
    content: String
})
module.exports = mongoose.model('Message', messageSchema);