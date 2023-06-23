const express = require("express")

const routes = express.Router()

routes.get("/",(request,response)=>{
    response.send("this is response from routes")
})

// now we need to export this routes variable in another files so, use below line 

module.exports = routes