const express = require("express");
const mongoose = require("mongoose");
const app = express();


const port = 4000;

const cookieParser = require("cookie-parser");

const cors = require("cors");

const registerRoute =require("./Routes/registerRoute");
const loginRoute = require("./Routes/loginRoute");
const cartRoute = require("./Routes/cartRoute");
const productRoute = require("./Routes/productRoute");

const passport = require("passport");


// Login 

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
})); 


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());


// passport.use()

const connectToDb = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connected");
}
connectToDb();

require("./config/passport");


app.use("/api/register",registerRoute);
app.use("/api/login",loginRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);

app.get("/manohar",passport.authenticate("jwt",{session:false}),(req,res)=>{
    res.send("Hello World");
    console.log(req.user);
})

app.listen(port,()=>{
    console.log("Server Started");
})
