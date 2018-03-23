var mongoose = require('mongoose');
var Notification = mongoose.model('Notification');

exports.getAll = (req, res) => {
  Notification.find({}).populate('User').exec((err, notifications) => {
    if(err)
      res.send(err);
      res.json(notifications);
  })
}

exports.createNotification = (req, res) => {
  var newNotification = new Notification(req.body);
  newNotification.save((err, notification) => {
    if(err)
      res.send(err);
    res.json(notification);
  })
}

exports.getOne = (req, res) => {
  Notification.findOne({id: req.params.id},(err, notification) => {
    if(err)
      res.send(err);
    res.json(notification);
  })
}
exports.updateNotification = (req, res) => {
  var newNotification = req.body;
  Notification.findOneAndUpdate({id: req.params.id},newNotification,(err, notification) => {
    if(err)
      res.send(err);
    res.json(notification);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteNotification = (req, res) => {
    Notification.findByIdAndRemove(req.body.id,(err, notification) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
