var mongoose = require('mongoose');
var Address = mongoose.model('Address');

exports.getAll = (req, res) => {
    Address.find({}).exec((err, addresses) => {
    if(err)
      res.send(err);
      res.json(addresses);
  })
}

exports.createAddress = (req, res) => {
  var newAddress = new Address(req.body);
  newAddress.save((err, address) => {
    if(err)
      res.send(err);
    res.json(address);
  })
}

exports.getOne = (req, res) => {
  Address.findOne({id: req.params.id},(err, adress) => {
    if(err)
      res.send(err);
    res.json(adress);
  })
}
exports.updateAddress = (req, res) => {
  var newAddress = req.body;
  Address.findOneAndUpdate({id: req.params.id},newAddress,(err, address) => {
    if(err)
      res.send(err);
    res.json(address);
  })
}
