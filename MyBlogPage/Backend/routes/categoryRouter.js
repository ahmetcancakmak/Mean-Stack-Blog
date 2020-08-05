var express = require('express');
var router = express.Router()
var Category = require('../model/category')



router.post('/add', (req, res) => {
    var category = new Category(req.body)
    category.save((error, result) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500).send({ message: error })
        }
        return res.sendStatus(201)
    })
})

router.get('/list', async (req, res) => {
    var categories = await Category.find({}, '-__v');
    res.send(categories);
})

router.get('/list/:name', async (req, res) => {
    var name=req.params.name;
    var categories = await Category.find({name}, '-__v');
    res.send(categories);
})


var category = { router }

module.exports = category