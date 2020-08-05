var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    biography:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Author',authorSchema);