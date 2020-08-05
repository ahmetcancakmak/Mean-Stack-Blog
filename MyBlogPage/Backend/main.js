var express = require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');

var author= require('./routes/authorRouter')
var category = require('./routes/categoryRouter')
var article = require('./routes/articleRouter')
var user = require('./routes/userRouter')

// MIDDLEWARES

require('dotenv/config');


var app = express();

app.use(bodyParser.json());
app.use(cors())



// DB CONNECTİON

mongoose.connect(process.env.DB_CONNECT,(error)=>{
    if(!error){
        console.log('Connected to DB');
    }
})

app.use('/article',article.router)
app.use('/author',author.router)
app.use('/category',category.router)
app.use('/user',user.router)

// LİSTEN

app.listen(8080);