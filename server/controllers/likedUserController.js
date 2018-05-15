var mongoose = require('mongoose');
var LikedUser = mongoose.model('LikedUser');
var User = mongoose.model('User');

var likedUsers = {

	getAll: (req, res) => {
		LikedUser.find({}).populate('User').exec((err, likedUsers) => {
			if(err)
				res.send(err);
				res.json(likedUsers);
		})
	},

	getOne: (req, res) => {
		LikedUser.findOne({id: req.params.id},(err, likedUser) => {
			if(err)
				res.send(err);
			res.json(likedUser);
		})
	},
	updateLikedUser: (req, res) => {
		var newLikedUser = req.body;
		LikedUser.findOneAndUpdate({id: req.params.id},newLikedUser,(err, likedUser) => {
			if(err)
				res.send(err);
			res.json(likedUser);
		})
	},

	createLikedUser: (req, res) => {
		User.findOne({ $and:[{'_id': req.body.likedBy}, {'friends': req.body.userID}]},
        (err, friend)=>{
            if(friend)
                res.json({ result: 0, msg: "You are already friend with this person!", data: friend || {} });
            else
            {
                var newLikedUser = new LikedUser(req.body);
                newLikedUser.save((err, data) => {
                    if(err)
                        res.json({ result: 0, msg: `Error while creating request!`, data: {} });
                    else{
                        User.findOneAndUpdate({_id: req.body.likedBy}, {$push: {"likedUsers": req.body.userID}}, (err1, data1)=>{
                            if (err1 || !data1)
                                res.json({ result: 0, msg: `Error while adding request!`, data: {} });
                            else
                                res.json({ result: 1, msg: "Add request successful!", data: data || {} });
                        });    
                    }
                });

			}
		});
	},

	deleteLikedUser: (req, res) => {
			LikedUser.findByIdAndRemove(req.body._id,(err, data) => {
			if (err)
				res.json({ result: 0, msg: `Error while deleting request!`, data: {} });
			else
				res.json({ result: 1, msg: "Delete request successful!", data: data || {} });
		})
	}
}
module.exports = likedUsers;