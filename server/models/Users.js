const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    id:Number,
    email:String,
    name:String,
    age:Number,
    contact:String,
    status:String

})
const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel