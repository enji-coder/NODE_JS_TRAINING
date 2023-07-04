const express = require("express")


const app = express() 

// dotenv file registeration in app.js 
require("dotenv").config() 


// route register 
const routes = require("./routes/main")
app.use("",routes)

// register hbs view engine 
app.set("view engine","hbs")
app.set("views","views")


// partials registration 
const hbs = require("hbs")
hbs.registerPartials("views/partials")

// register public folder as a static 
app.use("/static",express.static("public"))



// import mongoose 
const mongoose = require("mongoose")
const DBURL = process.env.DBURL
mongoose.connect(DBURL).then(()=>{
    console.log("database connected")
})


/// app executation 
app.listen(process.env.PORT | 5567,()=>{
    console.log("server started")
})