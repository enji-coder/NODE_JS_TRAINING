const express = require("express")

const app = express() // creating express application 

app.get("/",(request,response)=>{
    response.send("Welcome to node app")
})

app.listen(process.env.PORT | 9000,()=>{
    console.log("server started : ")
    
})
