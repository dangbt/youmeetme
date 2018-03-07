var mongoose = require('mongoose');
var dataUser = require('./data_user');

mongoose.connect('mongodb://localhost/kltn');
var db = mongoose.connection;

exports.findUser = (req, res) => {
  try {
    debugger;
    dataUser.findUser(db, req.params, (data) => {
      debugger;
      res.status(200).send(JSON.stringify(data));
    })
  }
  catch (err) {
    res.status(500).send(err);
  }
}
exports.createUser = (req, res) => {
  try {
    var newUser = req.body
    dataUser.findUser(db, {username: newUser.username}, (data) => {
      if (data.length != 0) {
        res.status(409).send('User is already exists');
        res.end();
      }
      else {
        dataUser.createUser(db, newUser);
        res.status(200).end();
      }
    })
  } catch(ex) {
    res.status(500).send(ex)
  }
}
