const reviewmodel=require('../model/reviewmodel')

exports.postdata=async(req,res)=>{
//   let values= new reviewmodel(req.body)
// let data=await reviewmodel.save(values)
   try{
// res.json(
//         {
//             message:"success",
//             postdata:data
//         }
//     )
  const newReview = new reviewmodel(req.body);
    const savedReview = await newReview.save();
    res.status(201).json({
      message: "success",
      postdata: savedReview
    });
   }
   catch(err){
    res.json({error:err.message})
   }
     
}