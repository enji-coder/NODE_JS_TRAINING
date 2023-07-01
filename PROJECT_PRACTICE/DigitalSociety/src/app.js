const express = require("express")
const app = express() 


// fetch all data from parser 
const bodyparser = require("body-parser")
app.use(bodyparser())
// fetch all data from parser 


// configure public folder as a static 
app.use("/static",express.static("public"))

const routes = require("./routes/main")
app.use("",routes)



// ##### begin  : database connection  ::: call db global link from process.env file
// install - dotenv package
require("dotenv").config()

const DBURL = process.env.DBURL
const mongoose = require("mongoose")
mongoose.connect(DBURL).then(()=>{
    console.log("DB Connected");
})

// ###### end  : database connection  ::: 

// configure template engine 
app.set("view engine","hbs")
app.set("views","views")



// configure partials in app.js file 
const hbs = require("hbs")
hbs.registerPartials("views/partials")



app.listen(process.env.PORT | 5567,()=>{
    console.log("Server Started")
})



