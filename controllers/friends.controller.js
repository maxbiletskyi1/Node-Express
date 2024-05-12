const model = require('../models/friends.model');
//Adding a new friend
function postFriend(req,res){
    //Validate data
    if (!req.body.name){
        return res.status(400).json({
            error: 'Missing friend name'
    });
    }
    //Create a friend
    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    //Update the array, if there's a name (Avoid empty objects)
    if (req.body.name){
        model.push(newFriend);
    }
    //Return JSON, regardless of the status code
    res.json(newFriend);
}

function getFriends(req,res){
    res.json(model); 
}

function getFriend(req,res){
    const friendID = Number(req.params.friendId);
    const friend = model[friendID];
    if (friend){
        // GET /friend/1 - 200
        res.status(200).json(friend);
    }else{
        //GET /friend/22 - 404
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend,
}