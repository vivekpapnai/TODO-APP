// include mongo when server is running
const db = require('../config/mongoose');
const todoApp = require('../models/todo');

module.exports.home = function(req, res){

    todoApp.find({}, function(err, todoapp){

        if (err){
            console.log('error in fetching data from database');
            return;
        }

        return res.render('home', {
            title: "Todo APP",
            todo_data : todoapp
        });
    })


};