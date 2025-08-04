import React,{useEffect} from 'react'
import './style.css'
import Rating from '@mui/material/Rating';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import { Apiurl } from '../api';
 const Feedback = ({onrefresh}) => {
    const [value, setValue] = React.useState(0);
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [date,setDate]=React.useState("")
    const [time,setTime]=React.useState("")
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
      let dateobj=new Date()
      setDate(dateobj.toDateString())
      setTime(dateobj.toLocaleTimeString());
      
    },[])


let feedbacksubmit=(e)=>{
  e.preventDefault()
  if(name&&message){
let obj={name,message,rating:value,date,time}
console.log(obj);
axios.post(`${import.meta.env.VITE_API_URL}/postdata`,obj)
.then((s)=>{console.log(s,onrefresh)
  onrefresh()
  setOpen(true)
  setInterval(()=>{
    setOpen(false)
  },3000)
})
.catch((err)=>{
  alert("data not submitted",err.message)
})
setName("")
setMessage("")
setValue(0)
setDate("")
setTime("")
  }else{
    alert("please enter you name and give feedback")
  }


}
            
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      
      <h1 className='text-center' style={{color:"navy"}}>FeedBack</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <form className=' p-3 border border-info rounded' style={{width:"40%",minWidth:"300px",maxWidth:"350px"}}>
          <div className='row'>
            <div className='col-6'><label className='mt-2'>Your Name</label></div>
            <div className='col-6'><input className='mt-2 fb-txt-box'placeholder='enter your name' onChange={(e)=>setName(e.target.value)} value={name}/></div>
             <div className='col-6'><label className='mt-2 '>Rating</label></div>
            <div className='col-6'>
                <div className='mt-2'>
                      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); 
        }}
      /></div> 
   {/* <input className='mt-2 fb-txt-box' /> */}
              </div>
             <div className='col-6'><label className='mt-2' >message</label></div>
            <div className='col-6'><input className='mt-2 fb-txt-box' placeholder="feedback"  onChange={(e)=>setMessage(e.target.value)} value={message}/></div>
            <div className='d-flex justify-content-end mt-3 '><button onClick={feedbacksubmit} className='btn btn-info'>submit</button></div>
          </div>
        </form>
      </div>
         <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Feedback submitted successfully!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  )
}
export default Feedback