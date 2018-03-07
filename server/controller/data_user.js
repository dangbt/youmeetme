var mongoose = require('mongoose');

exports.findUser = (db, data, callback) => {
  var User = require('../models/user')(db)
  User.find(data, (err, data) => {
      if (err) return console.log(err);
      callback(data);
  })
}
exports.createUser = (db, data) => {
  var User = require('../models/user')(db)
  var newUser = new User(data)
  newUser.save((err, data) => {
    if (err) console.log(err)
    else {
      User.find(data, (err, data) => {
        console.log(data);
      })
    }
  })
}
