const Product = require("../Models/Product");
const router = require("express").Router();

const User = require("../Models/User");

const Cart = require("../Models/Cart");
const passport = require("passport");

router.get("/",passport.authenticate("jwt", { session: false }),async(req,res)=>{
    const {items} = await Cart.findOne({ userId: req.user._id ,}).populate("items.productId");
    res.json(items);    
})

router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { quantity, productId } = req.body;

    const userCart = await Cart.findOne({ userId: req.user._id });

    const { price } = await Product.findById(productId);
    console.log(userCart);
    let msg = "";
    try {
        if (userCart != null) {

            const product = userCart.items.find((item)=>item.productId==productId)
            if(product==undefined){
            await Cart.updateOne({ userId: req.user._id }, {
                $push: {
                    items: {
                        productId, price, quantity
                    }
                }
            })
            msg = "item added to cart"}
            else{
                await Cart.updateOne({userId:req.user._id,"items.productId":productId},{
                    $inc:{"items.$.quantity":quantity}
                })
                msg="increased";
            }
        }
        else {
            const item = new Cart({
                userId: req.user._id,
                items: [
                    {
                        productId, price, quantity
                    }
                ],
                totalPrice: price * quantity
            });
            await item.save()
            msg = "cart created"
        }

        res.status(201).json(msg);
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;
