const express = require('express');
const messagesRouter = require('./routes/messages.router.js');
const friendsRouter = require('./routes/friends.router.js');
const app = express();

const PORT = 3000;

//Register Middleware 1
app.use((req,res,next)=>{
    //Keep track of method and url
    const start = Date.now();  
    next();
    //Actions
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//Register JSON-parsing middleware
app.use(express.json());

//Middleware Endpoint

//Route handler for /
app.get('/', (req, res)=>{
    res.send('<h1>Home page</h1>');
});

//Routers for other routes
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, ()=>{
    console.log('Running...');
});