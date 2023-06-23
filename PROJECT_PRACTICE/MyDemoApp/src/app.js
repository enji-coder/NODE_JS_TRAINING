const express = require("express")

const app = express() 
const routes = require("./routes/main")

app.use("",routes)

app.set("view engine","hbs")
app.set("views","views")

// configure public folder as a static 
app.use("/static",express.static("public"))


app.listen(process.env.PORT | 5556,()=> {
    console.log("server started")
})

