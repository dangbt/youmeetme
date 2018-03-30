var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var notificationSchema = Schema({
    title: String,
    content: String,
    userID: String,
    date: {type:Date, default:Date.now}
})

module.exports = mongoose.model('Notification', notificationSchema);