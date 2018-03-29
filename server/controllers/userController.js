var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getAll = (req, res) => {
  User.find({}).populate('Hobby').exec((err, users) => {
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


exports.loginUser = (req, res) => {
  try {
      var { username, password } = req.body;
      User.find({ username: username}, function (err, data) {
          if (err) {
              res.status(500).end(err);
          }
          else {
              if (data.length <= 0) {
                  res.status(404).end('User not found');
              }
              else {
                //tới đây rồi
                  var User = require('../models/user');
                  var user = new User(data[0]);
                  user.verifyPassword(password, function(err, valid){
                      if (err) {
                          res.status(500).end(err);
                          return;
                      }
                      if (valid) {
                          req.session.regenerate(function () {
                              req.session.user = {
                                  _id: user._id
                              }
                              res.status(200).end('Logged in successfully');
                          })
                      }
                      else {
                          res.status(401).end('Incorrect password');
                      }
                  })
              }
          }
      })
  } catch (err) {
      res.status(500).end(err);
  }
}
