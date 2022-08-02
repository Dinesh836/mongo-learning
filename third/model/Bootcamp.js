const mongoose=require('mongoose')

let userSchema=new mongoose.Schema({
    name : {
        type:String
    } , 
    age : {
        type:String
    }
})

const user=mongoose.model('user' , userSchema )
module.exports=user