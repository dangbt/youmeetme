var mongoose = require('mongoose');
var Account = mongoose.model('Account');

exports.getAll = (req, res) => {
    Account.find({}).exec((err, addresses) => {
    if(err)
      res.send(err);
      res.json(addresses);
  })
}

exports.createAccount = (req, res) => {
  var newAccount = new Account(req.body);
  Account.save((err, account) => {
    if(err)
      res.send(err);
    res.json(account);
  })
}