const express = require("express")

const routes = express.Router() 

routes.get("/",(req,res)=>{
    res.render("index")
})

routes.get("/sign-in",(req,res)=>{
    res.render("signin")
})

routes.get("/sign-up",(req,res)=>{
    res.render("signup")
})
module.exports = routes