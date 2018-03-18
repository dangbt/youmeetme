var express = require('express');
var app = express();
var path = require('path');
var staticPath =  'public';
var publicPath = 'assets';

var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var User = require('./server/models/user');
var Role = require('./server/models/role');
var Address = require('./server/models/address');
var Advertise = require('./server/models/advertise');
var Hobby = require('./server/models/hobby');
var Image = require('./server/models/image');
var LikedUser = require('./server/models/likedUser');
var ChatRoom = require('./server/models/chatRoom');
var Message = require('./server/models/message');
var Notification = require('./server/models/notification');

var bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/youmeetme');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/route')(app);

// serve static assets normally
app.use(express.static(__dirname + '/public'))

app.get(/^\/[a-z]*$/, (req, res) => {
    res.sendFile(path.join(__dirname, staticPath, '/index.html'))
});

// host assets save image....
app.use('/assets', express.static(path.join(__dirname, publicPath)));

app.listen(port, () => console.log("Server started port:"+port))
