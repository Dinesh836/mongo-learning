const express=require("express")
const env =require("dotenv")
//const logger=require("./mid/logger")
const connectdb=require('./util/db')

const bootcamps=require('./routes/bootcamps')

env.config()
connectdb()

const app=express()
app.use(express.json())

//app.use(logger)

app.use('/api/v1/boootcapms' , bootcamps)

const PORT=process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log("serever is up")
})

// /mongodb+srv://dineshpatil:<password>@cluster0.1ghz5.mongodb.net/test