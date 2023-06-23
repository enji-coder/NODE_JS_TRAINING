/*
go inside the web folder - for creation of package.json file 

execute below command 

# npm init -y

install express package execute below command   (to create server we need express)

# npm i express 

*/

// import express package 

const express = require("express")
const app = express()

const path = require("path")

const port = 9000

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("about",(req,res) => {
    res.sendFile(path.join(__dirname,"about.html"))
})
app.listen(port,()=>{
    console.log("server port : ",port)
})