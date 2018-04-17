var mongoose = require('mongoose');
var User = mongoose.model('User');
var session = require('express-session');

module.exports = {
	login: (req, res) => {
		try {
			var {
				username,
				password
			} = req.body;
			User.findOne({
				'username': username
			}, function (err, data) {
				if (err) {
					res.status(500).end(err);
				} else {
					if (!data) {
						res.status(404).end('User not found');
					} else {
						if (data.password === password) {
							//set session ở đây
							req.session.regenerate(function() {
								// will have a new session here
								req.session.user = {
									_id: data._id
								}
								res.status(200).end('Logged in successfully');
							  })
							 
						} else {
							res.status(401).end('Incorrect password');
						}
					}
				}
			})
		} catch (err) {
			res.status(500).end(err);
		}
		// var isValidPassword = function (user, password) {
		// 	//return bCrypt.compareSync(password, user.password);
		// 	return user.password === password;
		// }
	},
	logout: function (req, res) {
		try {
			req.session.destroy(function (err) {
				if (err) {
					res.status(500).end(err);
				}
				else {
					res.status(200).end('Logged out successfully');
				}
			})
		} catch (err) {
			res.status(500).end(err);
		}
	},


	checkAuthenticate: function (req, res) {
		try {
			if (req.session.user) {
				res.status(200).end('Logged in');
			}
			else {
				res.status(401).end('Not logged in');
			}
		} catch (err) {
			res.status(500).end(err);
		}
	},

}