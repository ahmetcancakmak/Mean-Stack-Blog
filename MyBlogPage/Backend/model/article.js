var mongoose = require('mongoose');


var articleSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Article',articleSchema);