const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes/'));

//set view engine
app.set('view engine' , 'ejs');
app.set('views', './views');


// include mongo when server is running
// const db = require('./config/mongoose');
// const todoApp = require('./models/todo');

// incldue static files
app.use(express.static('assets'));



// listening to the port
app.listen(port, function(err){

    if (err){
        console.log('Error in running the server');
    }
    console.log('sucessfuly run the server');

});