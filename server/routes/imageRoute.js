var express = require('express');
var imageController = require('../controllers/imageController');
var router = express.Router();

module.exports = (app) => {
    /*
    * IMAGE ROUTE
    */
    router.get('/images', imageController.getAll)
    router.post('/images', imageController.createImage); //body: imageURL, message, userID
    router.get('images/:id', imageController.getOne);
    router.put('images/:id', imageController.updateImage);
    router.delete('/images', imageController.deleteImage); //body: imageID, userID
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
