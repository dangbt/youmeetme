
var express = require('express');
var likedUserController = require('../controllers/likedUserController');
var router = express.Router();

module.exports = (app) => {
    /*
    * LIKE_USER ROUTE
    */
    router.get('/likedUsers', likedUserController.getAll)
    router.post('/likedUsers', likedUserController.createLikedUser); // body: userID, likedBy, message
    router.get('likedUsers/:id', likedUserController.getOne);
    router.get('/usersLikeMe', likedUserController.getUserLikeMe); // body: _id
    router.post('/users/likedUser', likedUserController.getLikedUser); // body: _id
    router.put('likedUsers/:id', likedUserController.updateLikedUser);
    router.delete('/likedUsers', likedUserController.deleteLikedUser);
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
