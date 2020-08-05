var express = require('express');
var router = express.Router()
var User = require('../model/user');
var jwt = require('jwt-simple');


router.post('/add', (req, res) => {
    var user = new User(req.body)
    user.save((error, result) => {
        if (error) {
            console.log(error)
            return res.sendStatus(500).send({ message: error })
        }
        return res.sendStatus(201)
    })
})

router.get('/list', async (req, res) => {
    var users = await User.find({}, '-__v');
    res.send(users);
})

router.post('/login',async (req, res) => {
    var userData = req.body
    var user = await User.findOne({email:userData.email})
    if(!user){
        return res.status(401).send({message:"Email or password invalid"})
    }
    if(userData.password != user.password){
        return res.status(401).send({message:"Email or password invalid"})
    }

    var payload={}
    var token=jwt.encode(payload,'12345')
    return res.status(200).send({token})
})

router.post('/register',async (req,res)=>{
    var user=new User(req.body)
    user.save((error,result)=>{
        if(error){
            console.log("Error saving the user")
        }
        return res.status(201).send({message:'Created'})
    })
})

// router.post('/login', async(req,res)=>{
//     var userData = new User(req.body)
//     var user = await User.findOne({email:userData.email},'-__v')
//     if(!user){
//         return res.status(401).send({message:'Email or Password invalid'})
//     }
//     if(userData.password != userData.password){
//         return res.status(401).send({message:'Email or Password invalid'})
//     }
//     return res.sendStatus(200)
// })


var user = { router , checkAuthenticated:(req,res,next)=>{
    if(!req.header('authorization')){
        return res.status(401).send({message:"Unauthorized. No Authorization Header"})
    }
    var token = req.header('authorization').split(' ')[1]
    var payload = jwt.decode(token,'12345')

    if(!payload){
        return res.status(401).send({message:'Unauthorized. Token is not valid'})
    }
    next()
}}

module.exports = user