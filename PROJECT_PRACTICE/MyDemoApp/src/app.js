const express = require("express")

const app = express() 
const routes = require("./routes/main")

app.use("",routes)

app.listen(process.env.PORT | 9000,()=> {
    console.log("server started")
})

