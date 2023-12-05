const { default: mongoose } = require("mongoose");

const form = mongoose.Schema({
    name:
    {
        type:String,
        required:[true , "please enter your name"]
    },

    email:
    {
        type:String,
        required:[true , "please enter your email"]
    },

    phone:
    {
        type : Number,
        required : [true , "please enter your number"]
    },

    msg:
    {
        type : String,
        required : [true , "please enter the message"]
    }
} , {
    timestamps : true
})

const formData = mongoose.model("FORM" , form)
module.exports = formData