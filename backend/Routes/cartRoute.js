const router = require("mongoose").Router();

router.post("/",passport.authenticate("jwt"),(req,res)=>{
     
    const cartItem = {
        userId:req.user._id,
        
    }
})

