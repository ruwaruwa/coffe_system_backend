const express=require('express');
const product=express.Router();
const Productmodel= require('../models/productsmodel');



const joi=require('joi')
product.get('/',async(req,res)=>{
  try {
    const custget= await Productmodel.find();
    res.status(200).send(custget)
  } catch (error) {
 res.status(400).send(error.message)
  }
})
//getbone
product.get('/:id',async(req,res)=>{
    try {
        const{id}=req.params
      const custget= await Productmodel.findById(id);
      res.status(200).send(custget)
    } catch (error) {
   res.status(400).send(error.message)
    }
  })

  //validaions
  //validaions
  const validation=(valid)=>{
    const val=joi.object({
        name:joi.string().required(),
        type:joi.string().required(),
        price:joi.string().required(),
        qty:joi.string().required()
    })
  return  val.validate(valid);
  }
  //const validation=
//post
product.post('/',async(req,res)=>{
    const{err}=validation(req.body)
    if(err){
      res.status(400).send(err.message)
    }
    try {
        const cuspo=await new Productmodel(req.body)
        await cuspo.save()
        res.status(200).send('successfuly added !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//
product.put('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  Productmodel.findByIdAndUpdate(id,req.body,{new:true})
        await cuspo.save()
        res.status(200).send('successfuly updated !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//
product.delete('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  Productmodel.findByIdAndDelete(id)
        //await cuspo.save()
        res.status(200).send('successfuly deleted !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports=product