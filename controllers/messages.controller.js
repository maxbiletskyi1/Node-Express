const path = require('path');

function getMessages(req, res){
    //res.send('<h1>Messages</h1>');
    res.sendFile(path.join(__dirname, '..', 'public', 'img1.jpg'));
}

function postMessage(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}