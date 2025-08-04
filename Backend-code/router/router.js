const express=require('express')
const router=express.Router()
const {getdata}=require('../controllers/getdata')
const {postdata}=require('../controllers/postdata')
router.route('/datas').get(getdata)
router.route('/datas').post(postdata)

module.exports=router