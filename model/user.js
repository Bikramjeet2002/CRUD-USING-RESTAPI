const mongoose = require("mongoose")

const usermodel=mongoose.Schema({
    username:String,
    email:String,
    password:String

})

const user=mongoose.model("bikram",usermodel)

module.exports={
    user
}