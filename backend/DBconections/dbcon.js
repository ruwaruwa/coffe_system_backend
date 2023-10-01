const moongoose=require('mongoose');
moongoose.set('strictQuery',false);
dbcon=async()=>{
    try {
        moongoose.connect('mongodb://127.0.0.1:27017/COFFE');
        console.log("DB CONNECT !!")
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbcon