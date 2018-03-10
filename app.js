var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var User = require('./server/models/user');
var Role = require('./server/models/role');
var bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/youmeetme');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/route')(app);
app.listen(port, () => console.log("Server started port:"+port))
