var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = Schema({
    userID: String,
    fullName: String,
    time: Date,
    image: String,
    content: String
})
module.exports = mongoose.model('Message', messageSchema);