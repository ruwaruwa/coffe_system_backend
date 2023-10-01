const moongoose=require('mongoose')
const Servceschema= new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    employe:{
        type:String,
        required:true
    }
})
const servicemodel= moongoose.model("service",Servceschema)
module.exports=servicemodel