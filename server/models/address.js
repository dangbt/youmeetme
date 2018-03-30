var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = Schema({
    content: String,
    whoInHere: [
        {
            userID: { type: Schema.Types.ObjectId, ref: 'User' },
            gender: String
        }
    ]
})

module.exports = mongoose.model('Address', addressSchema);