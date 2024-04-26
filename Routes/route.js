const express=require("express")
const { createuser,getuser,deluser,updateuser,updateuser1,replaceuser}=require("../controller/user")

const userrouter = express.Router()
userrouter.post("/create",createuser)
userrouter.get("/get",getuser)
userrouter.delete("/:id",deluser)
userrouter.patch("/update",updateuser)
userrouter.patch("/update1",updateuser1)
userrouter.put("/replace",replaceuser)

module.exports={
    userrouter
}