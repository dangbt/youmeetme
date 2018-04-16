var express = require('express');
var roleController = require('../controllers/roleController');
var router = express.Router();

module.exports = (app) => {
    /*
    * ROLES ROUTE
    */
    router.get('/roles', roleController.getAll)
    .post('/roles', roleController.createRole);

    // prefixed all of routes with /api
    app.use('/api', router);
}
