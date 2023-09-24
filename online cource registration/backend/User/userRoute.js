const express = require('express')
const router = express.Router()
const User = require('./userModel')
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');    

const JWT_SECRET = 'Abhiisgoodb@oy'

router.post('/createuser',[
    // check validation here...`
    body('fname','fname should contain alpha words').matches(/^[a-zA-Z]+$/),
    body('lname','lname should contain alpha words').matches(/^[a-zA-Z]+$/),
    body('username','Invalid username format').matches(/^[a-zA-Z0-9_]{3,20}$/),
    body('email','Enter valid email').isEmail(),
    body('password','The password should be at least 8 characters long. The password should contain at least one uppercase letter, one lowercase letter, and one number, and one symbol.').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
], async (req,res)=>{
    const errors = validationResult(req)
    let success = false
    if(!errors.isEmpty()){
        const errorMsg = errors.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({error: errorMsg[0]})
    }

    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password,salt)
    try{
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({error:"Sorry email is already exists"})
        }

        user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const jwtData = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({success,jwtData})
        return jwtData
    }catch(error){
        console.log(error.message)
        return res.status(500).send('Internal Server Error')
    }
})

// user login ||method:POST

router.post('/login',[
    // check validation here...
    body('email','Enter a valid email').isEmail(),
    body('password','Password can not be blank').exists(),
],
async (req,res)=>{
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMsg = errors.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({error: errorMsg[0]})
    };
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        let passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        data = {
            user:{
                id:user.id
            }
        }
        const jwtData = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({success,jwtData})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})


router.put('/updateuser/:id', [
    // check validation here...`
    body('fname','fname should contain alpha words').matches(/^[a-zA-Z]+$/),
    body('lname','lname should contain alpha words').matches(/^[a-zA-Z]+$/),
    body('username','Invalid username format').matches(/^[a-zA-Z0-9_]{3,20}$/),
    body('email','Enter valid email').isEmail(),
    body('password','The password should be at least 8 characters long. The password should contain at least one uppercase letter, one lowercase letter, and one number, and one symbol.').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
],async(req,res)=>{
    const errors = validationResult(req)
    let success = false
    if(!errors.isEmpty()){
        const errorMsg = errors.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({error: errorMsg[0]})
    }
    try{
        const {fname,lname,username,email,password,contact,gender,dob,streetAddr,city,state,country,image,studentId,instName,cgpa,deptName,link}=req.body
        const newUser={}

        if(fname) {newUser.fname=fname}
        if(lname) {newUser.lname=lname}
        if(username) {newUser.username=username}
        if(email) {newUser.email=email}
        if(password) {newUser.password=password}
        if(contact) {newUser.contact=contact}
        if(gender) {newUser.gender=gender}
        if(dob) {newUser.dob=dob}
        if(streetAddr) {newUser.streetAddr=streetAddr}
        if(city) {newUser.city=city}
        if(state) {newUser.state=state}
        if(country) {newUser.country=country}
        if(image) {newUser.image=image}
        if(studentId) {newUser.studentId=studentId}
        if(instName) {newUser.instName=instName}
        if(cgpa) {newUser.cgpa=cgpa}
        if(deptName) {newUser.deptName=deptName}
        if(link) {newUser.link=link}

        let user= await User.findById(req.params.id)

        if(!user){
            res.status(404).json({'error':'user not found'})
        }

        user=await User.findByIdAndUpdate(req.params.id,{$set:newUser},{new:true})
        res.json({success:true,user})
    }
    
    catch(err){
        res.status(500).json({err:'internal server error'})
    }
})

router.get('/fetchuser',async(req,res)=>{
    try{
        const user= await User.find()
        res.json({user})
        }
    catch(err){
        res.ststus(500).json({err:'internal server error'})
    }
})

module.exports = router