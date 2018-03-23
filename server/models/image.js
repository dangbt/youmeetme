var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imageSchema = Schema({
    imageURL: String,
    message: String,
    date: Date,
    userID: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Image', imageSchema);