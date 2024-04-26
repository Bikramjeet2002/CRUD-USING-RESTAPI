const mongoose= require("mongoose")

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DBURL)
        console.log("database is connected successfully")
    } catch (error) {
        console.log(error.message)
        
    }
}

module.exports={
    connectDB
}