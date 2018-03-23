var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var notificationSchema = Schema({
    title: String,
    content: String,
    userID: String,
    date: Date
})

module.exports = mongoose.model('Notification', notificationSchema);