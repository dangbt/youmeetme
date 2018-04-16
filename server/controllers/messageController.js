var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var ChatRoom = mongoose.model('ChatRoom');

	var messages = {
	getAll: (req, res) => {
		Message.find({}).exec((err, messages) => {
			if(err)
				res.send(err);
				res.json(messages);
		})
	},

	getOne: (req, res) => {
		Message.findOne({id: req.params.id},(err, message) => {
			if(err)
				res.send(err);
				res.json(message);
		})
	},

	updateMessage: (req, res) => {
		var newMessage = req.body;
		Message.findOneAndUpdate({id: req.params.id},newMessage,(err, message) => {
			if(err)
			res.send(err);
			res.json(message);
		})
	},

	getMessageByRoom: (req, res) => {		
		Message.find({roomID: req.params.id})
		.sort({'createdAt': -1})
		.limit(2)  
		.populate({
			path: 'sender',
			select: 'info.fullname avatar'
		})
		.exec((err, messages) => {
			if(err)
				res.json({ result: 0, msg: "Can't find message!", data: {} });
			else
				res.json({ result: 1, msg: "", data: messages || {} });
		})
	},

	createMessage: (req, res) => {
		// if the room existed and sender in that room
		ChatRoom.find({
            $and: [
                { '_id': req.body.roomID }, { $in:{ 'participants': req.body.senderID } }
            ]
        }, (err, data) => {
			if(err || !data)
				res.json({ result: 0, msg: "Can't find room or you don't have permission!", data: {} });
			else{
				// adding message with roomID
				var newMessage = new Message(req.body);
				newMessage.save((err, message) => {
					if (err || !message)
						res.json({ result: 0, msg: "Error while adding message!", data: {} });
					else
						res.json({ result: 1, msg: "Add message successful!", data: message || {} });
				});
			}
		});
	},

	//findByIdAndRemove luôn dùng _id
	deleteMessage: (req, res) => {
			Message.findByIdAndRemove(req.body.id,(err, message) => {
			if(err)
				res.send(err);
			res.status(200).send("Delete successful !!!").end();
		})
	}
}
module.exports = messages;