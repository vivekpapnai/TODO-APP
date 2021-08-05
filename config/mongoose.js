// require the library
const mongoose = require('mongoose'); 

//connect to database
mongoose.connect('mongodb://localhost/todo-app');

// accquire the connection to check if it's sucessful
const db = mongoose.connection;

//error 
db.on('error', function(err){
    console.log(err.message)
});

// when running sucessfully
db.once('open', function(){
    console.log('sucessfully connected to database');
})

module.exports = db;