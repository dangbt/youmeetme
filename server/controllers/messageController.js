var mongoose = require('mongoose');
var Message = mongoose.model('Message');

exports.getAll = (req, res) => {
  Message.find({}).exec((err, messages) => {
    if(err)
      res.send(err);
      res.json(messages);
  })
}

exports.createMessage = (req, res) => {
  var newMessage = new Message(req.body);
  newMessage.save((err, message) => {
    if(err)
      res.send(err);
    res.json(message);
  })
}

exports.getOne = (req, res) => {
  Message.findOne({id: req.params.id},(err, message) => {
    if(err)
      res.send(err);
    res.json(message);
  })
}
exports.updateMessage = (req, res) => {
  var newMessage = req.body;
  Message.findOneAndUpdate({id: req.params.id},newMessage,(err, message) => {
    if(err)
      res.send(err);
    res.json(message);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteMessage = (req, res) => {
    Message.findByIdAndRemove(req.body.id,(err, message) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
