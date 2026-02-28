const passport = require("passport");
const Product = require("../Models/Product");

const router = require("express").Router();

const secureAuth = [
    passport.authenticate("jwt",{session:false}),
     (req,res,next)=>{    
        console.log(req.user);
        
        if(req.user.role=="admin"){
            next();
        }
        else{
            res.send("Unauthorized Access");
        }
}];

router.get("/",async(req,res)=>{
    const products = await Product.find({});
    res.send(products);
});

router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.send(product);

})

router.post("/",secureAuth,async(req,res)=>{
        const prdouctDetails = req.body;
        const product = new Product(prdouctDetails);
        await product.save();
        res.status(201).send({msg:"product added"});
})
router.put("/:id",secureAuth,async(req,res)=>{
    const {id} = req.params;
    const prdouctDetails = req.body;
    console.log(prdouctDetails);
    console.log(id);
    
    
    await Product.updateOne({_id:id},{$set:prdouctDetails})
    res.send("Product Updated");
})
router.delete("/:id",secureAuth,async(req,res)=>{
    const {id}=req.params;
    await Product.deleteOne({_id:id});
    res.status(200);
})




module.exports=router;