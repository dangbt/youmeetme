var express = require('express');
var chatRoomController = require('../controllers/chatRoomController');
var router = express.Router();

module.exports = (app) => {
    /*
    * LIST CHAT ROUTE
    */
    router.get('/chatRooms', chatRoomController.getAll)
    router.get('/roomofuser', chatRoomController.getAllOfOne)
    router.post('/chatRooms', chatRoomController.createChatRoom);     //body: senderID, recipientID
    router.get('/chatRooms/byUser', chatRoomController.getRoomByUser);     //body: _id
    router.put('chatRooms/:id', chatRoomController.updateChatRoom);
    router.delete('/chatRooms', chatRoomController.deleteChatRoom);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
