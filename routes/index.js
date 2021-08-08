const express = require('express');

const router = express.Router();


// include mongo when server is running
const db = require('../config/mongoose');
const todoApp = require('../models/todo');

// router.use(express.urlencoded());
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));




const homecontroller = require('../controllers/home_controllers'); 

console.log("router loaded");

router.get('/', homecontroller.home);

router.post('/create-task', function(req, res){
    
    todoApp.create({
        Description: req.body.taskDesc,
        Category : req.body.category,
        DueDate : req.body.dueDate
    }, function(err, todoTasks){
        if (err){
            console.log('error in adding a task', err);
            return;
        }
        console.log('--------', todoTasks);
        return res.redirect('back');

    })

})






module.exports = router;
