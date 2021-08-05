const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    Description:{
        type: String,
        required: true
    },
    Category :{
        type : String,
        required : true
    },
    DueDate: {
        type : Date,
        required : true
    }

})

const todoApp = mongoose.model('todo', todoSchema);

module.exports = todoApp;