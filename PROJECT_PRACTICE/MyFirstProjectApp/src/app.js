const express = require("express")

const app = express() // creating express application 

app.get("/",(request,response)=>{
    response.send("Welcome to node app")
})

// step 2 : configure routes 
// need to import that routes from main.js 
const  routes = require("./routes/main")
app.use("",routes)


// step 3: configure template engine 
// need to set template engine 
app.set("view engine","hbs")
app.set("views","views")


app.listen(process.env.PORT | 9000,()=>{
    console.log("server started : ")
    
})
