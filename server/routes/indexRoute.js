var express = require('express');
var func_api = require('../controllers/func_api');
var userController = require('../controllers/userController');
var router = express.Router();

module.exports = (app) => {

    router.post('/login', func_api.login);
    router.post('/logout', func_api.logout);
    router.post('/signup', userController.createUser);
    router.get('/users/checkAuthenticate', func_api.checkAuthenticate);
    
    app.use('/api', router);
}
