const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://amaan:ahdheer12@indoor.inxwyxc.mongodb.net/")

app.listen(3001,()=>{
    console.log("server is running")
})