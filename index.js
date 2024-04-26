const express = require("express")
const dotenv = require("dotenv")
const app=express()
const { connectDB }=require("./db/db")
const {userrouter}= require("./Routes/route")
dotenv.config()

connectDB()

app.use(express.json())
app.use("/",userrouter)



app.listen(process.env.PORT,()=>{
    
    console.log("server is running on port")

})