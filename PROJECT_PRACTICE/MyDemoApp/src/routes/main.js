const express = require("express")

const routes = express.Router() 

routes.get("/",(req,res)=>{
    res.send("Route demo app started ")
})

module.exports = routes