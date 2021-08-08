const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    Description:{
        type: String,
        required: true
    },
    Category :{
        type : String,
        // required : true
    },
    DueDate: {
        type : String,
        required : true
    }

})

const todoApp = mongoose.model('todoApp', todoSchema);

module.exports = todoApp;