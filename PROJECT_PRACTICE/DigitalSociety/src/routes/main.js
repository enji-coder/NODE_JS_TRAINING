const routes = require("express").Router() 
const { trusted } = require("mongoose");
const Chairman = require("../models/chairman");


routes.post("/addregister",async (req,res)=> {
    console.log("====> register method called")
    console.log(req.body);
    console.log(req.body.name);

    try
    {
        const chairman = new Chairman(req.body)
        await chairman.save()
        res.render("login",{'msg':'successfully registered'})
    }
    catch(error)
    {
        res.render("login",{'msg': "something went wrong"})
    }
    
})

routes.post("/login-Evalute",async(req,res)=>{
    try
    {
        console.log("====>>> req")
        const allData = await Chairman.findOne({email:req.body.email,password:req.body.password})
        console.log("=======>>> all data ",allData)
        if(allData)
        {
            res.redirect("index")
        }
        else
        {
            res.render("login",{"emsg":"invalid email or password"})
        }
    }catch(error)
    {

    }
})

routes.get("/",(req,res)=>{
    res.render("login")
})

routes.get("/index",(req,res)=>{

    res.render("index")
})

routes.get("/profile",(req,res)=>{
    res.render("profile")
})

routes.get("/register",(req,res)=>{
    res.render("register")
})
routes.get("*",(req,res)=>{
    res.render("page404")
})
module.exports = routes