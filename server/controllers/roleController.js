var mongoose = require('mongoose');
var Role = mongoose.model('Role');

exports.getAll = (req, res) => {
  Role.find({}, (err, roles) => {
    if(err)
      res.send(err);
      res.json(roles);
  })
}


exports.createRole = (req, res) => {
  var newRole = new Role(req.body);
  newRole.save((err, role) => {
    if(err)
      res.send(err);
    res.json(role);
  })
}
