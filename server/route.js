var express = require('express');
var userController = require('./controllers/user/user_api.js');
var hobbyController = require('./controllers/hobby/hobby_api.js');
var express = require('express');
var router = express.Router();

module.exports = (app) => {

  
  /*
   * USER ROUTE
   */

  // router.get('/users', userController.getAll);
  // router.post('/users',userController.createUser);
  // router.get('/users/:id', userController.getOne);
  // router.put('/users/:id', userController.updateUser);
  // router.delete('/users', userController.deleteUser);
  router.get('/users', userController.getUser);
  router.get('/users/all', userController.getAllUser);
  router.get('/users/checkAuthenticate', userController.checkAuthenticate);
  router.put('/users/update', userController.authenticate,userController.updateUser);
  router.post('/users/logout',userController.authenticate, userController.logout);
  router.post('/users', userController.createUser);
  router.post('/users/login',userController.login);
  router.post('/users/signup',userController.createUser);
  // prefixed all of routes with /api

  /*
   * USER HOBBY
   */
  router.get('/hobbies', hobbyController.getHobby);
  router.post('/hobbies', hobbyController.createHobby);




  app.use('/api', router);
};