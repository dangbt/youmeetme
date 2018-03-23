var mongoose = require('mongoose');
var LikedUser = mongoose.model('LikedUser');

exports.getAll = (req, res) => {
  LikedUser.find({}).populate('User').exec((err, likedUsers) => {
    if(err)
      res.send(err);
      res.json(likedUsers);
  })
}

exports.createLikedUser = (req, res) => {
  var newLikedUser = new LikedUser(req.body);
  newLikedUser.save((err, likedUser) => {
    if(err)
      res.send(err);
    res.json(likedUser);
  })
}

exports.getOne = (req, res) => {
  LikedUser.findOne({id: req.params.id},(err, likedUser) => {
    if(err)
      res.send(err);
    res.json(likedUser);
  })
}
exports.updateLikedUser = (req, res) => {
  var newLikedUser = req.body;
  LikedUser.findOneAndUpdate({id: req.params.id},newLikedUser,(err, likedUser) => {
    if(err)
      res.send(err);
    res.json(likedUser);
  })
}
//findByIdAndRemove luôn dùng _id
exports.deleteLikedUser = (req, res) => {
    LikedUser.findByIdAndRemove(req.body.id,(err, likedUser) => {
    if(err)
      res.send(err);
    res.status(200).send("Delete successful !!!").end();
  })
}
