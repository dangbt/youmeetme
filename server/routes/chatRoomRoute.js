var express = require('express');
var chatRoomController = require('../controllers/chatRoomController');
var func_API = require('../controllers/func_api')
var router = express.Router();

module.exports = (app) => {
    /*
    * LIST CHAT ROUTE
    */
    router.get('/chatRooms',func_API.authenticate, chatRoomController.getAll)
    router.get('/roomofuser',func_API.authenticate, chatRoomController.getAllOfOne)
    router.post('/chatRooms',func_API.authenticate, chatRoomController.createChatRoom);     //body: senderID, recipientID
    router.get('/chatRooms/byUser',func_API.authenticate, chatRoomController.getRoomByUser);     //body: _id
    router.put('chatRooms/:id',func_API.authenticate, chatRoomController.updateChatRoom);
    router.delete('/chatRooms',func_API.authenticate, chatRoomController.deleteChatRoom);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
