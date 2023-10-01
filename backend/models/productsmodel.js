const moongoose=require('mongoose');
const PRODUCTSCHEMA= new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
   required:true
    },
    price:{
        type:Number,
      required:true
    },
    qty:{
        type:String,
       required:true
    }
})
const Productmodel=moongoose.model('PRODUCTS',PRODUCTSCHEMA)
module.exports=Productmodel