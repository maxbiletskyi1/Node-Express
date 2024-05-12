const express = require('express');
const friendsController = require('./controllers/friends.controller.js');
const messagesController = require('./controllers/messages.controller.js');
const app = express();

const PORT = 3000;

//Register Middleware 1
app.use((req,res,next)=>{
    //Keep track of method and url
    const start = Date.now();  
    next();
    //Actions
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

//Register JSON-parsing middleware
app.use(express.json());

//Middleware Endpoint

//Route handler for /
app.get('/', (req, res)=>{
    res.send('<h1>Home page</h1>');
});

//Routes with imported functions (MVC)
app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessage);

app.listen(PORT, ()=>{
    console.log('Running...');
});