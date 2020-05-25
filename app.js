const express=require('express')
const app=express()

const mongoose=require('mongoose')
const url='mongodb+srv://ngyittyn980518:123456abc@cluster0-ipmv4.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(url,{userNewUrlParser:true})

// Check if database connected
const con=mongoose.connection
con.on('open',()=>{
    console.log("Connected...")
})

// Allow express read JSON input
app.use(express.json())

// Access <aliens> routing function, use middleware so any request to https://localhost:9000/aliens will trigger
const alienRouter=require('./routes/aliens')
app.use('/aliens',alienRouter)

// Check if server connected
app.listen(9000,()=>{
    console.log("Server started...")
})

