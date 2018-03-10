var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getAll = (req, res) => {
  User.find({}).populate('role').exec((err, users) => {
    if(err)
      res.send(err);
      res.json(users);
  })
}

exports.createUser = (req, res) => {
  var newUser = new User(req.body);
  newUser.save((err, user) => {
    if(err)
      res.send(err);
    res.json(user);
  })
}

exports.getOne = (req, res) => {
  User.findOne({id: req.params.id},(err, user) => {
    if(err)
      res.send(err);
    res.json(user);
  })
}
exports.updateUser = (req, res) => {
  var newUser = req.body;
  User.findOneAndUpdate({id: req.params.id},newUser,(err, user) => {
    if(err)
      res.send(err);
    res.json(user);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.body.id,(err, user) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
