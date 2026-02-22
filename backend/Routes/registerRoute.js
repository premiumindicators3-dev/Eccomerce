const User = require("../Models/User");
const jwt = require("jsonwebtoken");


const Router = require("express").Router;
const router = Router();


router.post("/",async(req,res)=>{
    const userDetails = req.body;
    try{
        const user = new User(userDetails);
        await user.save();
       const payload = {name:user.name};
           const token =  jwt.sign(payload,"manohar");
           res.cookie("token",token,{
             httpOnly:true,
             secure:false,
             sameSite:"lax"
           }).status(201).json({messge:"Register  Succesful",token});
    }catch(error){
        console.log(error);
    }
    
})

module.exports=router;