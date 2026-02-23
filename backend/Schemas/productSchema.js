const {Schema} = require("mongoose");

const productSchema = new Schema({
    name:String,
    price:Number,
    description:String,
    image:String,
    stock:String
})
module.exports = productSchema
