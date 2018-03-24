var express = require('express');
var userController = require('./controllers/userController');
var roleController = require('./controllers/roleController');

module.exports = (app) => {

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
