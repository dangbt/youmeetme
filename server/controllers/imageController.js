var mongoose = require('mongoose');
var Image = mongoose.model('Image');

exports.getAll = (req, res) => {
  Image.find({}).populate('User').exec((err, images) => {
    if(err)
      res.send(err);
      res.json(images);
  })
}

exports.createImage = (req, res) => {
  var newImage = new Image(req.body);
  newImage.save((err, image) => {
    if(err)
      res.send(err);
    res.json(image);
  })
}

exports.getOne = (req, res) => {
  Image.findOne({id: req.params.id},(err, image) => {
    if(err)
      res.send(err);
    res.json(image);
  })
}
exports.updateImage = (req, res) => {
  var newImage = req.body;
  Image.findOneAndUpdate({id: req.params.id},newImage,(err, image) => {
    if(err)
      res.send(err);
    res.json(image);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteImage = (req, res) => {
    Image.findByIdAndRemove(req.body.id,(err, image) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
