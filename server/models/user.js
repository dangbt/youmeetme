var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
  fullName: String,
  gender: String,
  birthday: Date,
  height: String,
  weight: String,
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  country: String,
  knowledge: String,
  work: String,
  salary: String,
  marialStatus: String,
  introduce: String,
  avatar: String,
  hobbies: [
    { type: Schema.Types.ObjectId, ref: 'Hobby' }
  ],
  images: [
    { type: Schema.Types.ObjectId, ref: 'Image' }
  ],
  notification: [
    { type: Schema.Types.ObjectId, ref: 'Notification' }
  ],
  friends: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ],
  listChat: [
        { type: Schema.Types.ObjectId,
          ref: 'ChatRoom' ,
          friendName: String,
          friendImage: String
        }
  ],
  listBlock: [
    { type: Schema.Types.ObjectId, ref: 'ListBlock' }
  ],
  likedUsers: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ]
})
module.exports = mongoose.model('User', userSchema);
