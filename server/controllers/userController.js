var mongoose = require('mongoose');
var User = mongoose.model('User');
var Hobby = mongoose.model('Hobby');
var Address = mongoose.model('Address');

var users = {
	getAll: (req, res) => {
		User.find({}).populate({path: 'hobbies', select: 'content'}).exec((err, users) => {
			if (err)
				res.send(err);
			res.json(users);
		})
	},

	createUser: (req, res) => {
		var newUser = new User(req.body);
		newUser.save((err, user) => {
			if (err)
				res.send(err);
			res.json(user);
		})
	},

	getOne: (req, res) => {
		User.findOne({
			_id: req.params.id
		}).populate({path: 'hobbies', select: 'content'}).exec( (err, user) => {
			if (err)
				res.send(err);
			res.json(user);
		})
	},
	updateUser: (req, res) => {
		var newUser = req.body;
		User.findOneAndUpdate({
			_id: req.params.id
		}, newUser, (err, user) => {
			if (err)
				res.send(err);
			res.json(user);
		})
	},
	//findByIdAndRemove luôn dùng _id
	deleteUser: (req, res) => {
		User.findByIdAndRemove(req.body._id, (err, user) => {
			if (err)
				res.send(err);
			res.status(200).send("Delete successful !!!").end();
		})
	},

	addHobby: (req, res) => {
		User.findOneAndUpdate({_id: req.body._id}, { $push: { "hobbies": req.body.hobby }}, (err, data) => {
			if (err) {
				res.json({ result: 0, msg: `Server error`, data: {} });
			} else{
				Hobby.findOneAndUpdate({_id: req.body.hobby}, {$push: {"whoLikeThis": {"userID": req.body._id}}}, (err1, data1) =>{
					if (err1 || !data1)
						res.json({ result: 0, msg: `Error while add hobby!`, data: {} });
					else
						res.json({ result: 1, msg: "Add hobby successful!", data: data || {} });
				});
			}
		});
	},
	
	removeHobby: (req, res) =>{
		if (!req.body._id || !req.body.hobby)
			return res.json({ result: 0, msg: `Param not correct!`, data: {} });
		User.findOneAndUpdate({_id: req.body._id}, { $pull: { "hobbies": req.body.hobby}}, (err, data) => {
			if (err)
				return res.json({ result: 0, msg: `Server error`, data: {} });
			if (!data) {
				res.json({ result: 0, msg: `Can't remove this hobby!`, data: {} });
			} else{
				Hobby.findByIdAndUpdate({_id: req.body.hobby}, { $pull: { "whoLikeThis": {"userID": req.body._id}}}, (err1, data1) =>{
					if (err1 || !data1)
						res.json({ result: 0, msg: `Error while remove hobby!`, data: {} });
					else
						res.json({ result: 1, msg: "Remove hobby successful!", data: {} });
				});
			}
		});
	},

	addFriend: (req, res) =>{
		if(!req.body._id || !req.body.userID)
			return res.json({result: 0, msg: `Param not correct!`, data: {}});
		User.findOneAndUpdate({_id: req.body._id}, {$push: {"friends": req.body.userID}}, (err, data) =>{
			if(err)
				res.json({ result: 0, msg: `Server error`, data: {} });
			else{
				User.findOneAndUpdate({_id: req.body.userID}, {$push: {"friends": req.body._id}}, (err1, data1)=>{
					if (err1 || !data1)
						res.json({ result: 0, msg: `Error while adding friend!`, data: {} });
					else
						res.json({ result: 1, msg: "Add friend successful!", data: data || {} });
				});
			}
		});
	},

	removeFriend: (req, res) =>{
		if(!req.body._id || !req.body.userID)
			return res.json({result: 0, msg: `Param not correct!`, data: {}});
		User.findOneAndUpdate({_id: req.body._id}, {$pull: {"friends": req.body.userID}}, (err, data) =>{
			if(err)
				res.json({ result: 0, msg: `Server error`, data: {} });
			if (!data) 
				res.json({ result: 0, msg: `Can't remove this friend!`, data: {} });
			else{
				User.findOneAndUpdate({_id: req.body.userID}, {$pull: {"friends": req.body._id}}, (err1, data1)=>{
					if (err1 || !data1)
						res.json({ result: 0, msg: `Error while removing friend!`, data: {} });
					else
						res.json({ result: 1, msg: "Remove friend successful!", data: {} });
				});
			}
		});
	},

	blockUser: (req, res) =>{
		if(!req.body._id || !req.body.userID)
			return res.json({result: 0, msg: `Param not correct!`, data: {}});
		User.findOneAndUpdate({_id: req.body._id}, {$push: {"listBlock": req.body.userID}}, (err, data) =>{
			if(err)
				res.json({ result: 0, msg: `Server error`, data: {} });
			else{
				res.json({ result: 1, msg: "Block user successful!", data: data || {} });
			}
		});
	},

	removeBlock: (req, res) =>{
		if(!req.body._id || !req.body.userID)
			return res.json({result: 0, msg: `Param not correct!`, data: {}});
		User.findOneAndUpdate({_id: req.body._id}, {$pull: {"listBlock": req.body.userID}}, (err, data) =>{
			if(err)
				res.json({ result: 0, msg: `Server error`, data: {} });
			if (!data) 
				res.json({ result: 0, msg: `Can't remove blocked user!`, data: {} });
			else{
				res.json({ result: 1, msg: "Remove blocked user successful!", data: {} });
			}
		});
	},

	//TODO: khi user change address chưa xử lí xóa người dùng bên Address
	changeAddress: (req, res) => {
		User.findOneAndUpdate({_id: req.body.userID}, {"info.address": req.body.addressID }, (err, data) => {
			if (err) {
				res.json({ result: 0, msg: `Server error`, data: {} });
			} else{
				Address.findOneAndUpdate({_id: req.body.addressID}, {$push: {"whoInHere": req.body.userID}}, (err1, data1) =>{
					if (err1 || !data1)
						res.json({ result: 0, msg: `Error while add User to Address!`, data: {} });
					else
						res.json({ result: 1, msg: "Add address successful!", data: data || {} });
				});
			}
		});
	}
}
module.exports = users;