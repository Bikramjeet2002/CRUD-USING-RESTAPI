const {user}= require("../model/user")


const createuser= async(req,res)=>{
    try {
        const {username,email,password}= req.body
        const newuser= await user.create({
            username,
            email,
            password
        })
        res.send(newuser)
        
    } catch (error) {
        res.send(error.message)
        
    }
}

const getuser= async(req,res)=>{
    try {
        res.send(await user.find({}))
    } catch (error) {
        res.send(error.message)
        
    }
}


const deluser= async(req,res)=>{
    try {
        let {id} = req.params
        const del= await user.deleteOne({_id:id})
        res.send(del)
        
    } catch (error) {
        res.send(error.message)
        
    }
}

const updateuser= async(req,res)=>{
    try {
        const {id,password}=req.body
        const update=await user.updateOne({_id:id},{
            $set:{password:password}
        })
        res.send(update)
    } catch (error) {
        res.send(error.message)
    }
}
const updateuser1= async(req,res)=>{
    try {
        const {id,username,password}=req.body
        const update=await user.updateOne({_id:id},{
            $set:{username:username,
                password:password}
        })
        res.send(update)
    } catch (error) {
        res.send(error.message)
    }
}


const replaceuser=async(req,res)=>{
    try {
        const{id,username,password,email}= req.body
        const replace = await user.findOneAndReplace({_id:id},{
            username:username,
            password:password,
            email:email
        })
        res.send(replace)
    } catch (error) {
        res.send(error.message)
        
    }
}



module.exports={
    createuser,
    getuser,
    deluser,
    updateuser,
    updateuser1,
    replaceuser
}