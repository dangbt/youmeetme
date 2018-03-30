var express = require('express');
var userController = require('./controllers/userController');
var roleController = require('./controllers/roleController');

module.exports = (app) => {
  var userController = require('./controllers/userController');
  var addressController = require('./controllers/addressController');
  var advertiseController = require('./controllers/advertiseController');
  var hobbyController = require('./controllers/hobbyController');
  var imageController = require('./controllers/imageController');
  var likedUserController = require('./controllers/likedUserController');
  var chatRoomController = require('./controllers/chatRoomController');
  var messageController = require('./controllers/messageController');
  var notificationController = require('./controllers/notificationController');
  var roleController = require('./controllers/roleController');
  var express = require('express');
  var router = express.Router();
  /*
   * USER ROUTE
   */
  router.get('/users', userController.getAll)
  .post(userController.createUser);
  router.get('/users/:id', userController.getOne);
  router.put('/users/:id', userController.updateUser);
  router.delete('/users', userController.deleteUser);

  /*
   * ADVERTISE ROUTE
   */
  router.get('/advertises', advertiseController.getAll)
    .post('/advertises', advertiseController.createAdvertise);
  router.get('/advertises/:id', advertiseController.getOne);
  router.put('/advertises/:id', advertiseController.updateAdvertise);
  router.delete('/advertises', advertiseController.deleteAdvertise);

  /*
   * ADDRESS ROUTE
   */
  router.get('/addresses', addressController.getAll)
    .post('/addresses', addressController.createAddress);
  router.get('/addresses/:id', addressController.getOne);
  router.put('/addresses/:id', addressController.updateAddress);

  /*
   * HOBBY ROUTE
   */
  router.get('/hobbies', hobbyController.getAll)
    .post('/hobbies', hobbyController.createHobby);
  router.get('/hobbies/:id', hobbyController.getOne);
  router.put('/hobbies/:id', hobbyController.updateHobby);
  router.delete('/hobbies', hobbyController.deleteHobby);

  /*
   * IMAGE ROUTE
   */
  router.get('/images', imageController.getAll)
    .post('/images', imageController.createImage);
  router.get('images/:id', imageController.getOne);
  router.put('images/:id', imageController.updateImage);
  router.delete('/images', imageController.deleteImage);

  /*
   * LIKE_USER ROUTE
   */
  router.get('/likedUsers', likedUserController.getAll)
    .post('/likedUsers', likedUserController.createLikedUser);
  router.get('likedUsers/:id', likedUserController.getOne);
  router.put('likedUsers/:id', likedUserController.updateLikedUser);
  router.delete('/likedUsers', likedUserController.deleteLikedUser);
  
  /*
   * LIST CHAT ROUTE
   */
  router.get('/chatRooms', chatRoomController.getAll)
    .post('/chatRooms', chatRoomController.createChatRoom);
  router.get('chatRooms/:id', chatRoomController.getOne);
  router.put('chatRooms/:id', chatRoomController.updateChatRoom);
  router.delete('/chatRooms', chatRoomController.deleteChatRoom);
  router.put('/addMessage/:id', chatRoomController.addMessage);

  /*
   * MESSAGE ROUTE
   */
  router.get('/messages', messageController.getAll)
    .post('/messages', messageController.createMessage);
  router.get('messages/:id', messageController.getOne);
  router.put('messages/:id', messageController.updateMessage);
  router.delete('/messages', messageController.deleteMessage);

  /*
   * NOTIFICATION ROUTE
   */
  router.get('/notifications', notificationController.getAll)
    .post('/notifications', notificationController.createNotification);
  router.get('notifications/:id', notificationController.getOne);
  router.put('notifications/:id', notificationController.updateNotification);
  router.delete('/notifications', notificationController.deleteNotification);

  /*
   * ROLES ROUTE
   */
  router.get('/roles', roleController.getAll)
    .post('/roles', roleController.createRole);
  
  // prefixed all of routes with /api
  app.use('/api', router);
};