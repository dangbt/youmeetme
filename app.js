const express = require('express');
const app = express();
const path = require('path');
const staticPath = 'public';
const publicPath = 'assets';
const cors = require('cors');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const User = require('./server/models/user');
const Role = require('./server/models/role');
const Address = require('./server/models/address');
const Advertise = require('./server/models/advertise');
const Hobby = require('./server/models/hobby');
const Image = require('./server/models/image');
const LikedUser = require('./server/models/likedUser');
const ChatRoom = require('./server/models/chatRoom');
const Message = require('./server/models/message');
const Notification = require('./server/models/notification');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/youmeetme');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}))
// route
require('./server/routes/addressRoute')(app);
require('./server/routes/advertiseRoute')(app);
require('./server/routes/hobbyRoute')(app);
require('./server/routes/imageRoute')(app);
require('./server/routes/likeUserRoute')(app);
require('./server/routes/chatRoomRoute')(app);
require('./server/routes/messageRoute')(app);
require('./server/routes/notificationRoute')(app);
require('./server/routes/roleRoute')(app);
require('./server/routes/userRoute')(app);
require('./server/routes/indexRoute')(app);

app.use(session({
    secret: 'youmeetme',
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: {
        maxAge: 15 * 60 * 1000
    },
    store: new MongoStore({
        url: 'mongodb://localhost/youmeetme',
        ttl: 15 * 60,
    })
}))


// serve static assets normally
app.use(express.static(__dirname + '/public'))

app.get(/^((?!\/apii)(\/[a-z\-]*)*)*$/, (req, res) => {
    res.sendFile(path.join(__dirname, staticPath, '/index.html'))
});

// host assets save image....
app.use('/assets', express.static(path.join(__dirname, publicPath)));

app.listen(port, () => console.log("Magic happens on port: " + port))
