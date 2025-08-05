import React,{useEffect,useState} from 'react'
import { Apiurl } from '../api'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import './Review.css'
import Snackbar from '@mui/material/Snackbar';
 const Review = ({refreshTrigger}) => {
    let [reviews,setReviews]=useState([])
    let [toast,setToast]=useState(false)
   console.log(refreshTrigger);
   
    useEffect(()=>{
        axios.get(`${Apiurl}/datas`)
        .then((s)=>{
          setReviews(s.data.data)
        
        })
        .catch((er)=>{
           setToast(true)
          setTimeout(()=>{
            handleClose()
          },3000)
        })
    },[refreshTrigger])
      const handleClose = () => {
    setToast(false);
  };
                                     /* rating:Number,
                                       name:String,
                                          message:String,
                                         date:String,
                                              time:String,*/    
  return (
    <div className='rvis'>
         
        <h1 className='text-center ' style={{color:"navy"}}>Reviews</h1>
        {reviews.length>0?
             <div className='overflowboxreview'>
            
          {reviews?.map((a,b)=>{
            return <div className='reviews-card' key={b}>
                <h5 style={{textTransform: "capitalize",color:"navy"}}>{a.name}</h5>
                <p style={{textIndent:"30px",textAlign:"justify"}}>{a.message}</p>
                <div className='d-md-flex justify-content-between'>
                    <div className=''><label>Rating</label>
                    <div><Rating
        name=""
        value={a.rating} /></div> 
        </div>
                    <div className=''>
                      <div>{a.time}</div>
                      <div>{a.date}</div>
                    </div>
                </div>
            </div>
          })}
        </div>:<div className='overflowboxreview'>
          <h1 className='text-center'>No Reviews There</h1>
          </div>}
            <Snackbar
        open={toast}
      
        message="error data not get from database"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  )
}
export default Review