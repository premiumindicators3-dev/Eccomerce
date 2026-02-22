const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/User");


router.post("/",async(req,res)=>{
  const {name,password} = req.body;
    const user = await User.findOne({name});
    if(!user && user.password!==password){
        res.status(400).json({message:"Invalid Creditailas"})
    }
    const payload = {name};
    const token =  jwt.sign(payload,"manohar");
    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"lax"
    }).status(201).json({messge:"Login Succesful",token});
})



module.exports= router;