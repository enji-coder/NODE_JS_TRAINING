const mongoose = require("mongoose")

const chairmanSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password :{
        type:String
    }
})
module.exports = new mongoose.model("Chairman",chairmanSchema)