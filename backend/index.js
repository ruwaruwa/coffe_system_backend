const express=require('express')
const app= express()
const cors=require('cors')

//const moongoose=require('moongoose')
const dbcon=require('./DBconections/dbcon')
dbcon();


const product=require('./routers/productroute')
const customer=require('./routers/customerrote')
const Service=require('./routers/serviceroute')
app.use(cors())
app.use(express.json())


app.use('/customer',customer)
app.use('/product',product)
app.use('/Service',Service);
 app.listen(6001,async(req,res)=>{
    console.log('server started at 6001')
 })