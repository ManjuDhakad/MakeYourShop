const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
router.post('/register' ,async(req , res) => {
    try{
        // reading the data from user
        const {email , password} = req.body
        const existingUser = await User.findOne({email: email})
        // checking use is already exists or not
        if(existingUser){
            return res
            .status(400)
            .json({msg: 'USer account already exists'})
        }
        // if not exist we encrypted the password and get the generated hash code
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password , salt)
        console.log(passwordHash)
        // create the document/record of user
        const newUser = new User({
            email,
            password: passwordHash
        })
        console.log('newUser')
        console.log(newUser)
        // created user record save to the collections.
        const savedUser = await newUser.save()
        res.json(savedUser)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})

router.post('/login' , async(req , res)=>{
    try{
        const{email , password} = req.body;
        const user = await User.find({email : email})
        if(!user){
            return res
            .status(400)
            .json({msg : "User Account doesn't exists"})
        }
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch) return res.status(400).json({msg: "invalid password"})
        const token = jwt.sign({id : user._id} , process.env.JWT_SECRET)
        res.json({
            user: {
                id: user._id
            }
        })

    }catch(err){
        res.status(500).json(err.message)
    }

})

module.exports = router