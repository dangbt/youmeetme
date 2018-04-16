var dataHobby = require('./data_hobby');

module.exports = {
	createHobby: function (req, res) {
		try {
			var newHobby = req.body;
			dataHobby.findHobby({ content: newHobby.content }, function (err, data) {
				if (err) {
					res.status(500).send(err).end();
					return;
				}

				if (data.length != 0) {
					res.status(409).send('Hobby is already exists').end();
				}

				else {
					dataHobby.createHobby(newHobby, (err, data) => {
						if (err) res.status(500).send(err).end();
						else res.status(200).end('Create Hobby successful');
					})
				}
			})
		} catch (ex) {
			res.status(500).send(ex).end();
		}
	},	
    

	getHobby: function (req, res) {
		try {
			dataHobby.findHobby({}, function (err, data) {
				if (err) {
					res.status(500).end(err);
				}
				else {
					if (data.length <= 0) {
						res.status(404).end('Hobby not found');
					}
					else {
						var hobby = data;
						res.status(200).end(JSON.stringify(hobby));
					}
				}
			})
		} catch (err) {
			res.status(500).end(err);
		}
	},
}