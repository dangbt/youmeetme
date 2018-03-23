var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var hobbySchema = Schema({
    content: String,
    whoLikeThis: [
        {
            userID: { type: Schema.Types.ObjectId, ref: 'User' },
            sex: String
        }
    ]
})

module.exports = mongoose.model('Hobby', hobbySchema);