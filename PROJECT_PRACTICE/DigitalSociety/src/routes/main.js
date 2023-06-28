const routes = require("express").Router() 

routes.get("/",(req,res)=>{
    res.render("login")
})

routes.get("/register",(req,res)=>{
    res.render("register")
})
module.exports = routes