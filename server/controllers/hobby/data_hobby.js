var mongoose = require('mongoose')

exports.findHobby = function (data, callback) {
  var Hobby = require('../../models/hobby')
  Hobby.find(data,function (err, data) {
    if (callback) callback(err, data);
  })
}

exports.createHobby = function (data, callback) {
  var Hobby = require('../../models/hobby')
  var Hobby = new Hobby(data);
  Hobby.save(function (err, data) {
    if (callback) callback(err, data);
  })
}

// exports.updateUser = function (condition, data, callback) {
//   var User = require('./../models/user')
//   User.findOneAndUpdate(condition, data, { $new: false }, function (err, model) {
//     if (callback) callback(err, model);
//   })
// }

// exports.deleteUser = function (condition, callback) {
//   var User = require('./../models/user')
//   User.findByIdAndRemove(condition, (err, data) => {
//     if (callback) callback(err, data);
//   })
// }