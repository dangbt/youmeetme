var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.login= (req, res) => {
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
						//tới đây rồi
						if (data.password === password) {
							req.session.regenerate(function () {
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
		var isValidPassword = function (user, password) {
			//return bCrypt.compareSync(password, user.password);
			return user.password === password;
		}
	}