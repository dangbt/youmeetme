var mongoose = require('mongoose');
var ChatRoom = mongoose.model('ChatRoom');
var Message = mongoose.model('Message');

var chatRooms= {
	getAll: (req, res) => {
		ChatRoom.find({}).populate('Message').exec((err, chatRooms) => {
			if(err)
				res.send(err);
				res.json(chatRooms);
		})
	},

	getOne: (req, res) => {
		ChatRoom.findOne({id: req.params.id},(err, chatRoom) => {
			if(err)
			res.send(err);
			res.json(chatRoom);
		})
	},

	updateChatRoom: (req, res) => {
		var newChatRoom = req.body;
		ChatRoom.findOneAndUpdate({id: req.params.id},newChatRoom,(err, chatRoom) => {
			if(err)
			res.send(err);
			res.json(chatRoom);
		})
	},
	
	createChatRoom: (req, res) => {
		ChatRoom.find({ $in:[{'participants': req.body.senderID}, {'participants': req.body.recipientID}]},
		(err, data)=>{
			if(data)
				res.json({ result: 0, msg: "Room existed", data: data || {} });
			else
				var body = [];
				body = [req.body.senderID, req.body.recipientID];
				ChatRoom.create({participants: body}, (err, room) => {
					if (err || !room)
						res.json({ result: 0, msg: "Error while create Room!", data: {} });
					else
						res.json({ result: 1, msg: "Add Room successful!", data: room || {} });
				});
		});
	},
	//findByIdAndRemove luôn dùng _id
	deleteChatRoom: (req, res) => {
			ChatRoom.findByIdAndRemove(req.body._id,(err, chatRoom) => {
			if(err)
				res.send(err);
			res.status(200).send("Delete successful !!!").end();
		})
	},
}
module.exports = chatRooms;