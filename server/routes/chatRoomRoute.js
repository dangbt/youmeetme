var express = require('express');
var chatRoomController = require('../controllers/chatRoomController');
var router = express.Router();

module.exports = (app) => {
    /*
    * LIST CHAT ROUTE
    */
    router.get('/chatRooms', chatRoomController.getAll)
    router.get('/roomofuser', chatRoomController.getAllOfOne)
    .post('/chatRooms', chatRoomController.createChatRoom);
    router.get('chatRooms/:id', chatRoomController.getOne);
    router.put('chatRooms/:id', chatRoomController.updateChatRoom);
    router.delete('/chatRooms', chatRoomController.deleteChatRoom);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
