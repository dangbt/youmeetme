var mongoose = require('mongoose');
var Hobby = mongoose.model('Hobby');

exports.getAll = (req, res) => {
  Hobby.find({}).exec((err, hobbies) => {
    if(err)
      res.send(err);
      res.json(hobbies);
  })
}

exports.createHobby = (req, res) => {
  var newHobby = new Hobby(req.body);
  newHobby.save((err, hobby) => {
    if(err)
      res.send(err);
    res.json(hobby);
  })
}

exports.getOne = (req, res) => {
  Hobby.findOne({id: req.params.id},(err, hobby) => {
    if(err)
      res.send(err);
    res.json(hobby);
  })
}
exports.updateHobby = (req, res) => {
  var newHobby = req.body;
  Hobby.findOneAndUpdate({id: req.params.id},newHobby,(err, hobby) => {
    if(err)
      res.send(err);
    res.json(hobby);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteHobby = (req, res) => {
    Hobby.findByIdAndRemove(req.body.id,(err, hobby) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
