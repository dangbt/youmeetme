var mongoose = require('mongoose');
var Advertise = mongoose.model('Advertise');

exports.getAll = (req, res) => {
  Advertise.find({}).exec((err, advertises) => {
    if(err)
      res.send(err);
      res.json(advertises);
  })
}

exports.createAdvertise = (req, res) => {
  var newAdvertise = new Advertise(req.body);
  newAdvertise.save((err, advertise) => {
    if(err)
      res.send(err);
    res.json(advertise);
  })
}

exports.getOne = (req, res) => {
  Advertise.findOne({id: req.params.id},(err, advertise) => {
    if(err)
      res.send(err);
    res.json(advertise);
  })
}
exports.updateAdvertise = (req, res) => {
  var newAdvertise = req.body;
  Advertise.findOneAndUpdate({id: req.params.id},newAdvertise,(err, advertise) => {
    if(err)
      res.send(err);
    res.json(advertise);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteAdvertise = (req, res) => {
    Advertise.findByIdAndRemove(req.body.id,(err, advertise) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
