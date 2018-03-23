var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var likeUserSchema = Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    likedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    Messages: String
})

module.exports = mongoose.model('LikedUser', likeUserSchema);