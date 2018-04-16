var express = require('express');
var advertiseController = require('../controllers/advertiseController');
var router = express.Router();

module.exports = (app) => {
    /*
    * ADVERTISE ROUTE
    */
    router.get('/advertises', advertiseController.getAll)
    router.post('/advertises', advertiseController.createAdvertise);
    router.get('/advertises/:id', advertiseController.getOne);
    router.put('/advertises/:id', advertiseController.updateAdvertise);
    router.delete('/advertises', advertiseController.deleteAdvertise);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
