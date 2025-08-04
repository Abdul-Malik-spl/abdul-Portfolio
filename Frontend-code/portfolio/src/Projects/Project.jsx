import React,{useEffect, useState} from 'react'
import './Project.css'
import clock from './images/clock-pic.jpeg'
import rock from './images/rock-pic.jpg'
import bask from './images/basket-pic.png'
import bank from './images/bank-pic.png'
import fb from './images/fb-pic.png'
import bmi from './images/bmi.jpg.jpeg'
import timer from './images/timer.jpg.jpeg'
import weather from './images/weather.jpg'
import clinic from './images/clinic.png'
import memory from './images/memory.jpg'
const Project = () => {
    let [detailpop,setdetailpop]=useState([])
    let [selectdetail,setSelectdetail]=useState("")
    let state = [
  {
    name: "Digital Clock",
    summary: "Real-time clock with date and time. Built using HTML, CSS, JS.",
    link: "https://abdul-malik-spl.github.io/Digital-Clock",
    pic: clock,
  },
  {
    name: "Rock Paper Scissors",
    summary: "Play vs computer. Click to choose and see result. HTML, CSS, JS.",
    link: "https://abdul-malik-spl.github.io/rock-papper-scissors",
    pic: rock,
  },
  {
    name: "Little Basket",
    summary: "Responsive grocery app with cart and favorites. React + Redux.",
    link: "https://abdul-malik-spl.github.io/littleBasket",
    pic: bask,
  },
  {
    name: "Bank Task",
    summary: "Simulated banking app with login, transactions, and live balance. React + Redux. Login: Raj111/0101, Suresh112/5151, Mahesh113/5331",
    link: "https://abdul-malik-spl.github.io/bankTask/",
    pic: bank,
  },
  {
    name: "Fb Task",
    summary: "Facebook-style app with posts, likes, and comments. React + Redux. Login: Abdul/abdul@gmail.com/12345, Raj/raj@gmail.com/54321, Kavi/kavi@gmail.com/01010",
    link: "https://abdul-malik-spl.github.io/FbTask",
    pic: fb,
  },
  {
    name: "BMI Calculator",
    summary: "Enter height and weight to see BMI with animated meter. HTML, CSS, JS.",
    link: "https://abdul-malik-spl.github.io/bmi/train.html",
    pic: bmi,
  },
  {
    name: "Timer",
    summary: "Countdown timer with start, pause, and reset. HTML, CSS, JS.",
    link: "https://abdul-malik-spl.github.io/stopwatch",
    pic: timer,
  },
  {
    name: "Weather App",
    summary: "Live weather updates using API. Search cities globally. React.",
    link: "https://abdul-malik-spl.github.io/weather/",
    pic: weather,
  },
  {
    name: "Memory Game",
    summary: "Flip cards to match pairs. Fun and clean UI. HTML, CSS, JS.",
    link: "https://abdul-malik-spl.github.io/memory-game/",
    pic: memory,
  },
  {
  name: "Clinic Management System",
  summary: " Clinic Management System is my first self-built real-time frontend project. I created the entire UI using React and Open Router. It includes role-based login for Doctor, Receptionist, and Medical team, with each role seeing different pages and features. Demo login is available — for example, if you log in as a doctor using username: demo and password: demo123, you’ll see all doctor-related pages. This project is designed specifically for desktop use. While mobile responsiveness is included, I strongly recommend viewing it on a desktop for the best experience.",
  link: "https://abdul-malik-spl.github.io/clinic/",
  pic: clinic,
}

];
    const [popList,setPopList]=useState(state.map(a=>false))
    console.log(popList);
    
useEffect(()=>{

},[])

let popupopen=(ind)=>{
  let updatepop=popList.map((a,b)=>{
       return  b==ind?!a:a
  }
  
)
setPopList(updatepop)

}
   
console.log(selectdetail);

  return (
    <div className='cards-component'>
          <h3 className='text-center mt-2' style={{color:"navy"}}>Projects</h3>
       <div className='row'>
        {state.map((a,b)=>{
            return <div key={b} className={a.name=="Clinic Management System"?'col-12  ':'col-12  col-md-4 '}>
                <div className='border m-2  p-2 d-flex align-items-center justify-content-center flex-column cardoriginal' >
                    <div style={{height:"200px",overflowY:"scroll",width:"200px"}} className='p-2 hide-scrollbar '>
                        <img src={a.pic} style={{width:"100%"}}/></div>
                    <h5 className='text-center' style={{color:"navy"}}>{a.name}</h5>
                   <div className='pop hide-scrollbar'> 
                    {popList[b]?<div className='popupcard'><p className='text-center'>{a.summary}</p></div>:""}
                    </div>
               
                </div>
                <div className='m-2  p-2 d-flex justify-content-around border border-info'>
                    <a onClick={()=>popupopen(b)}  className={popList[b]?"text-danger":"text-primary"} style={{textDecoration:"none",cursor:"pointer"}}>{popList[b]?"Close":"Details"}</a>
                    <a className='text-primary' href={a.link} style={{textDecoration:"none"}}>View Project</a></div>
            </div>
        })}
       </div>
    </div>
  )
}
export default Project

