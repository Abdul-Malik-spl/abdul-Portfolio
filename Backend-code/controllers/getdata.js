const mongoose=require('mongoose')
const reviewmodel=require('../model/reviewmodel')

exports.getdata=async(req,res)=>{
    try{
   let value=await reviewmodel.find({})
    res.status(200).json(
        {
            message:"success",
            data:value
        }
    )
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }

}