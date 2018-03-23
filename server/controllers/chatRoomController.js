var mongoose = require('mongoose');
var ChatRoom = mongoose.model('ChatRoom');

exports.getAll = (req, res) => {
  ChatRoom.find({}).populate('Message').exec((err, chatRooms) => {
    if(err)
      res.send(err);
      res.json(chatRooms);
  })
}

exports.createChatRoom = (req, res) => {
  var newChatRoom = new ChatRoom(req.body);
  newChatRoom.save((err, chatRoom) => {
    if(err)
      res.send(err);
    res.json(chatRoom);
  })
}

exports.getOne = (req, res) => {
  ChatRoom.findOne({id: req.params.id},(err, chatRoom) => {
    if(err)
      res.send(err);
    res.json(chatRoom);
  })
}
exports.updateChatRoom = (req, res) => {
  var newChatRoom = req.body;
  ChatRoom.findOneAndUpdate({id: req.params.id},newChatRoom,(err, chatRoom) => {
    if(err)
      res.send(err);
    res.json(chatRoom);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteChatRoom = (req, res) => {
    ChatRoom.findByIdAndRemove(req.body.id,(err, chatRoom) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
