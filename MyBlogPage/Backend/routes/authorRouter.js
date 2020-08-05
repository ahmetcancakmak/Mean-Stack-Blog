var express = require('express');
var router = express.Router()
var Author = require('../model/author')



router.post('/add',(req,res)=>{
    var author = new Author(req.body)
    author.save((error,result)=>{
        if(error){
            console.log(error)
            return res.sendStatus(500).send({message:error})
        }
        return res.sendStatus(201)
    })
})

router.get('/list',async (req,res)=>{
   var authors = await Author.find({},'-__v');
   res.send(authors);
})

var author = {router}

module.exports = author