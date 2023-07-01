const mongoose = require("mongoose")

const noticeSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description :{
        type:String
    },
    created_at :{
        type:Date,
        default:Date.now
    }
})

module.exports = new mongoose.model("Notice",noticeSchema)
