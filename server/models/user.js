var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
	info:{
		fullName: { type: String, trim: true },
		gender: { type: String },
		birthday: { type: Date },
		height: { type: String },
		weight: { type: String },
		marialStatus: { type: String },
		introduce: { type: String },
		knowledge: { type: String },
		address: { type: Schema.Types.ObjectId, ref: 'Address' },
		country: { type: String },
	},
	occupation:{
		work: { type: String },
		salary: { type: String },
	},
	avatar: { type: String },
	contact:
	{
		email: {
			type: String,
			trim: true,
			lowercase: true,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
		},
		phone: { type: String, trim: true },
		web_page: { type: String }
	},
	username: { type: String, trim: true },
	password: { type: String, trim: true },
	hobbies: [
		{ type: Schema.Types.ObjectId, ref: 'Hobby' }
	],
	images: [
		{ type: Schema.Types.ObjectId, ref: 'Image' }
	],
	notifications: [
		{ type: Schema.Types.ObjectId, ref: 'Notification' }
	],
	friends: [
		{ type: Schema.Types.ObjectId, ref: 'User' }
	],
	listChat: [
		{ roomID: {type: Schema.Types.ObjectId, ref: 'ChatRoom'},
			friendName: String,
			friendImage: String
		}
	],
	listBlock: [
		{ type: Schema.Types.ObjectId, ref: 'User' }
	],
	likedUsers: [
		{ type: Schema.Types.ObjectId, ref: 'User' }
	]
},
	{ timestamps: true} // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
);
module.exports = mongoose.model('User', userSchema);
