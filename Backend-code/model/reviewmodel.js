const mongoose=require('mongoose')

const reviewshema= new mongoose.Schema({
    rating:Number,
    name:String,
    message:String,
    date:String,
    time:String,
})

const  reviewmodel=mongoose.model("commentdetail",reviewshema)

module.exports=reviewmodel