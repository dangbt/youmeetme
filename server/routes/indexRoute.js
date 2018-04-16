var express = require('express');
var func_api = require('../controllers/func_api');
var router = express.Router();

module.exports = (app) => {

    router.post('/login', func_api.login);
    router.get('/users/checkAuthenticate', func_api.checkAuthenticate);
    
    app.use('/api', router);
}
