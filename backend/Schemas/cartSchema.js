const {Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    totalPrice:Number,
    items:[
        {
            productId:{
            type:Schema.Types.ObjectId,
            ref:"Product"
        },
            quantity:Number,
            price:Number
        }
    ]
})
module.exports=cartSchema;
