var express = require('express');
var hobbyController = require('../controllers/hobbyController');
var router = express.Router();

module.exports = (app) => {
    /*
    * HOBBY ROUTE
    */
    router.get('/hobbies', hobbyController.getAll)
    .post('/hobbies', hobbyController.createHobby);
    router.get('/hobbies/:id', hobbyController.getOne);
    router.put('/hobbies/:id', hobbyController.updateHobby);
    router.delete('/hobbies', hobbyController.deleteHobby);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
