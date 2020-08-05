var express = require('express');
var router = express.Router()
var Article = require('../model/article');
var user = require('./userRouter')



router.post('/add', (req, res) => {
    var article = new Article(req.body)
    article.save((error, result) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500).send({ message: error })
        }
        return res.sendStatus(201)
    })
})

router.get('/list',user.checkAuthenticated,async (req, res) => {
    var articles = await Article.find({}, '-__v').populate('author', '-__v -_id').populate('category', '-__v');
    res.send(articles);
})

router.get('/list/:categoryId',user.checkAuthenticated,async (req, res) => {
    var category = req.params.categoryId
    var article = await Article.find({category}, '-__v').populate('author', '-__v -_id').populate('category', '-__v');
    res.send(article);
})

var article = { router }

module.exports = article