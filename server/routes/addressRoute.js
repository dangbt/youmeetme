var express = require('express');
var addressController = require('../controllers/addressController');
var router = express.Router();

module.exports = (app) => {
    /*
    * ADDRESS ROUTE
    */
    router.get('/addresses', addressController.getAll);
    router.post('/addresses', addressController.createAddress); //content
    router.get('/addresses/:id', addressController.getOne);
    router.put('/addresses/:id', addressController.updateAddress);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
