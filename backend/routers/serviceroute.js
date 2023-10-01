const express=require('express');
const Service=express.Router();
const servicemodel= require('../models/Service');



const joi=require('joi')
Service.get('/',async(req,res)=>{
  try {
    const custget= await servicemodel.find();
    res.status(200).send(custget)
  } catch (error) {
 res.status(400).send(error.message)
  }
})
//getbone
Service.get('/:id',async(req,res)=>{
    try {
        const{id}=req.params
      const custget= await servicemodel.findById(id);
      res.status(200).send(custget)
    } catch (error) {
   res.status(400).send(error.message)
    }
  })

  //validaions
  const validation=(valid)=>{
    const val=joi.object({
        name:joi.string().required(),
        type:joi.string().required(),
        employe:joi.string().required()
    })
  return  val.validate(valid);
  }
//post
Service.post('/',async(req,res)=>{
  const{err}=validation(req.body)
  if(err){
    res.status(400).send(err.message)
  }
  try {
    const cuspo=await new servicemodel(req.body)
    await cuspo.save()
    res.status(200).send('successfuly added !')
} catch (error) {
    res.status(400).send(error.message)
}
})

//
Service.put('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  servicemodel.findByIdAndUpdate(id,req.body,{new:true})
        await cuspo.save()
        res.status(200).send('successfuly updated !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//
Service.delete('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  servicemodel.findByIdAndDelete(id)
        //await cuspo.save()
        res.status(200).send('successfuly deleted !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports=Service