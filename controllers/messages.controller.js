function getMessages(req, res){
    res.send('<h1>Messages</h1>');
}

function postMessage(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}