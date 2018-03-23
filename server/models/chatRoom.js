var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chatRoomSchema = Schema({
    lastMessage: String,
    lastMessageTime: Date,
    messages: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Message'
        }
    ]
})

module.exports = mongoose.model('ChatRoom', chatRoomSchema);