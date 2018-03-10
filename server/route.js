module.exports = (app) => {
  var userController = require('./controllers/userController');
  var roleController = require('./controllers/roleController');
  
  app.route('/users')
    .get(userController.getAll)
    .post(userController.createUser);
  app.route('/users/:id').get(userController.getOne);
  app.route('/users/:id').put(userController.updateUser);
  app.route('/users').delete(userController.deleteUser);

  app.route('/roles')
    .get(roleController.getAll)
    .post(roleController.createRole);
};
