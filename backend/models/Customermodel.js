const moongoose=require('mongoose')

const CUSTOMER=new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
       required:true
    }
})
const customermodel=moongoose.model('Customer',CUSTOMER);
module.exports=customermodel