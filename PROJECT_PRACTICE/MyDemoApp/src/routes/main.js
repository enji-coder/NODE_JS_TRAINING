const express = require("express")

const routes = express.Router() 

routes.get("/",(req,res)=>{
    // res.send("Route demo app started ")
    res.render("index")
})

routes.get("/about",(req,res)=>{
    res.render("about")
})

module.exports = routes