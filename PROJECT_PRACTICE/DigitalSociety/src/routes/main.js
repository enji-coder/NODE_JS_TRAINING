const routes = require("express").Router() 
const { trusted } = require("mongoose");


const Chairman = require("../models/chairman");
const Notice = require("../models/notice");

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

routes.post("/add-notice-data",async (req,res)=>{
    
    try
    {
        const notice = new Notice(req.body)
        await notice.save()
        res.render("add_notice",{'msg':'successfully Notice Added'})
    }
    catch(error)
    {
        res.render("add_notice",{'emsg': "something went wrong"})
    }
})

routes.get("/view_notice",async (req,res)=>{
    const noticeData = await Notice.find()
    //console.log("====>>> all notice : ",noticeData)
    res.render("notice_list",{'noticeData':noticeData})
})

routes.get("/del-notice",async (req,res)=>{
    try {
        const id = req.query.did
        console.log("===+>>>",id)
        console.log("notice del called ")
        //sawait Notice.findByIdAndDelete(id)
        res.redirect('view_notice')
         
    } catch (error) {
        
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

routes.get("/add_notice",(req,res)=>{
    res.render("add_notice")
})



routes.get("*",(req,res)=>{
    res.render("page404")
})
module.exports = routes