const express = require("express")

const app = express() 
const routes = require("./routes/main")

// need to import mongoose for database connectivity
const mongoose = require("mongoose")

app.use("",routes)

app.set("view engine","hbs")
app.set("views","views")

const hbs = require("hbs")
hbs.registerPartials("views/partials")


// configure public folder as a static
// const path = require("path")
// const public_path = path.join(__dirname,"./public") 
app.use("/static",express.static("public"))

//app.use(express.static(public_path))


// ------------ DB CONNECTION -----------------
// mongoose.connect("mongodb://localhost/website_demo")
// ------------ DB CONNECTION -----------------



app.listen(process.env.PORT | 5556,()=> {
    console.log("server started")
})



