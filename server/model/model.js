const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,

    },
    status : String
})

const taskdb = mongoose.model('taskdb', schema);

module.exports = taskdb;