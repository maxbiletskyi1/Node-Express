const express = require('express');
const messagesRouter = require('./routes/messages.router.js');
const friendsRouter = require('./routes/friends.router.js');
const path = require('path');
const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

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

//Serve Static Files to a specific route
app.use('/site', express.static(path.join(__dirname, 'public')));
//Register JSON-parsing middleware
app.use(express.json());

//Middleware Endpoint

//Route for View with render method for hbs
app.get('/', (req, res)=>{
    res.render('index', {
        title: 'My friends',
        caption: 'My friends',
    });
});

//Routers for other routes
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, ()=>{
    console.log('Running...');
});