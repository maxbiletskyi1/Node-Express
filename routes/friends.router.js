const express = require('express');
const friendsController = require('../controllers/friends.controller.js');

const friendsRouter = express.Router();

//Routes with imported functions (MVC)
//Middleware for IP logging
friendsRouter.use((req,res,next)=>{
    console.log("IP: ", req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;