var express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();

module.exports = (app) => {
    /*
     * USER ROUTE
     */
    router.get('/users', userController.getAll);
    router.post('/users',userController.createUser);
    router.get('/users/:id', userController.getOne);
    router.put('/users/:id', userController.updateUser);
    router.delete('/users', userController.deleteUser);
    router.post('/users/addHobby',userController.addHobby);
    router.post('/users/removeHobby',userController.removeHobby);
    router.post('/users/addFriend',userController.addFriend); // body: _id, userID 
    router.post('/users/removeFriend',userController.removeFriend); // body: _id, userID
    router.post('/users/blockUser',userController.blockUser); // body: _id, userID
    router.post('/users/removeBlock',userController.removeBlock); // body: _id, userID
    router.post('/users/addAddress',userController.changeAddress); // body: userID, addressID
    
    // prefixed all of routes with /api
    app.use('/api', router);
}
