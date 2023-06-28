const express = require("express")
const app = express() 

const routes = require("./routes/main")
app.use("",routes)

// configure template engine 
app.set("view engine","hbs")
app.set("views","views")


// configure public folder as a static 
app.use("/static",express.static("public"))

// configure partials in app.js file 
const hbs = require("hbs")
hbs.registerPartials("views/partials")



app.listen(process.env.PORT | 5567,()=>{
    console.log("Server Started")
})



