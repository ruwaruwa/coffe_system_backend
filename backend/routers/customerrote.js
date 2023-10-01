const express=require('express')
const customer=express.Router();
const customermodel=require('../models/Customermodel');
const joi=require('joi')
customer.get('/',async(req,res)=>{
  try {
    const custget= await customermodel.find();
    res.status(200).send(custget)
  } catch (error) {
 res.status(400).send(error.message)
  }
})
//getbone
customer.get('/:id',async(req,res)=>{
    try {
        const{id}=req.params
      const custget= await customermodel.findById(id);
      res.status(200).send(custget)
    } catch (error) {
   res.status(400).send(error.message)
    }
  })

  //validaions

  const validation=(valid)=>{
    const val=joi.object({
        name:joi.string().required(),
        address:joi.string().required(),
        phone:joi.string().required(),
      
    })
  return  val.validate(valid);
  }

  //const validation=
//post
customer.post('/',async(req,res)=>{
    const{err}=validation(req.body)
    if(err){
      res.status(400).send(err.message)
    }
    try {
        const cuspo=await new customermodel(req.body)
        await cuspo.save()
        res.status(200).send('successfuly added !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
// customer.post('/',async(req,res)=>{
//     const postdat= await new customermodel(req.body);
//     await postdat.save();
//     res.json('success fully posted')
// })
//
customer.put('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  customermodel.findByIdAndUpdate(id,req.body,{new:true})
        await cuspo.save()
        res.status(200).send('successfuly updated !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//
customer.delete('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  customermodel.findByIdAndDelete(id)
        //await cuspo.save()
        res.status(200).send('successfuly deleted !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports=customer