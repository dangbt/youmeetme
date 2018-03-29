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

  /*
   * USER ROUTE
   */
  app.route('api/users')
    .get(userController.getAll)
    .post(userController.createUser);
  app.route('/users/:id').get(userController.getOne);
  app.route('/users/:id').put(userController.updateUser);
  app.route('/users').delete(userController.deleteUser);

  /*
   * ADVERTISE ROUTE
   */
  app.route('/advertises')
    .get(advertiseController.getAll)
    .post(advertiseController.createAdvertise);
  app.route('/advertises/:id').get(advertiseController.getOne);
  app.route('/advertises/:id').put(advertiseController.updateAdvertise);
  app.route('/advertises').delete(advertiseController.deleteAdvertise);

  /*
   * ADDRESS ROUTE
   */
  app.route('/addresses')
    .get(addressController.getAll)
    .post(addressController.createAddress);
  app.route('/addresses/:id').get(addressController.getOne);
  app.route('/addresses/:id').put(addressController.updateAddress);

  /*
   * HOBBY ROUTE
   */
  app.route('/hobbies')
    .get(hobbyController.getAll)
    .post(hobbyController.createHobby);
  app.route('/hobbies/:id').get(hobbyController.getOne);
  app.route('/hobbies/:id').put(hobbyController.updateHobby);
  app.route('/hobbies').delete(hobbyController.deleteHobby);

  /*
   * IMAGE ROUTE
   */
  app.route('/images')
    .get(imageController.getAll)
    .post(imageController.createImage);
  app.route('images/:id').get(imageController.getOne);
  app.route('images/:id').put(imageController.updateImage);
  app.route('/images').delete(imageController.deleteImage);

  /*
   * LIKE_USER ROUTE
   */
  app.route('/likedUsers')
    .get(likedUserController.getAll)
    .post(likedUserController.createLikedUser);
  app.route('likedUsers/:id').get(likedUserController.getOne);
  app.route('likedUsers/:id').put(likedUserController.updateLikedUser);
  app.route('/likedUsers').delete(likedUserController.deleteLikedUser);
  
  /*
   * LIST CHAT ROUTE
   */
  app.route('/chatRooms')
    .get(chatRoomController.getAll)
    .post(chatRoomController.createChatRoom);
  app.route('chatRooms/:id').get(chatRoomController.getOne);
  app.route('chatRooms/:id').put(chatRoomController.updateChatRoom);
  app.route('/chatRooms').delete(chatRoomController.deleteChatRoom);

  /*
   * MESSAGE ROUTE
   */
  app.route('/messages')
    .get(messageController.getAll)
    .post(messageController.createMessage);
  app.route('messages/:id').get(messageController.getOne);
  app.route('messages/:id').put(messageController.updateMessage);
  app.route('/messages').delete(messageController.deleteMessage);

  /*
   * NOTIFICATION ROUTE
   */
  app.route('/notifications')
    .get(notificationController.getAll)
    .post(notificationController.createNotification);
  app.route('notifications/:id').get(notificationController.getOne);
  app.route('notifications/:id').put(notificationController.updateNotification);
  app.route('/notifications').delete(notificationController.deleteNotification);

  /*
   * ROLES ROUTE
   */
  app.route('/roles')
    .get(roleController.getAll)
    .post(roleController.createRole);
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  var router = express.Router()

  router.get('/users', userController.getAll);
  router.get('/users/:id', userController.getOne);
  router.post('/users', userController.createUser);
  router.post('/users/login', userController.loginUser);
  router.put('/users/:id', userController.updateUser);
  router.delete('/users/:id', userController.deleteUser);

  // app.route('/users')
  //   .get(userController.getAll)
  //   .post(userController.createUser);
  // app.route('/users/:id').get(userController.getOne);
  // app.route('/users/:id').put(userController.updateUser);
  // app.route('/users').delete(userController.deleteUser);
  router.get('/roles', roleController.getAll);
  router.post('/roles', roleController.createRole);
  // app.route('/roles')
  //   .get(roleController.getAll)
  //   .post(roleController.createRole);
  app.use('/api', router)
};
>>>>>>> code client
>>>>>>> solver conflit
=======
>>>>>>> build client: create components
