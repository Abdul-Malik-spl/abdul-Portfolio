import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css';
import devloperimg from './images/dev.gif'
import html from './images/htmlcssjs.png'
import bootstrap from './images/download.png'
import reacticon from './images/react.png'
import nodeicon from './images/node.png'

import './App.css'
import Feedback from './Feedback/Feedback';
import Project from './Projects/Project';
import Review from './ReviewShow/Review';
import whats from './images/whats.png'
import insta from './images/insta.png'

function App() {
  let [daytime,setDayTime]=useState("")
  let [description,setdescription]=useState("Hi, I'm Abdul—a full-stack developer skilled in HTML, CSS, JavaScript, React.js, and Bootstrap. I'm currently advancing my backend expertise in Express.js and MongoDB.I’ve built a MERN stack student management project and designed a complete clinic management UI using React. I love solving practical problems through responsive design and clean, scalable architecture.Let’s build something impactful together.")
  let com=useRef()
  let [paferefresh,setPageRefresh]=useState(false)
  let [skills,setSkills]=useState([ {lang:"HTML",logo:html,para:[{HTML:"I use HTML to build clean and structured layouts. It’s the foundation of every project I start.",
                                                                 CSS:"I style websites using CSS, making them responsive and visually appealing across all devices.",
                                                                 JavaScript:"I use JavaScript to add interactivity and dynamic behavior to web pages and applications"}]},
                                    {lang:"Bootstrap",logo:bootstrap,para:[{Bootstrap:"I use Bootstrap to build responsive layouts quickly. Its grid system and components help me design clean UIs with less custom CSS."}]},
                                    {lang:"React",logo:reacticon,para:[{React:"I build scalable UIs using React. I’ve used hooks, props, and reusable components in real projects like clinic and student management systems."}]},
                                    {lang:"Node.js",logo:nodeicon,para:[{NodeJs:"I use Node.js to build backend logic and handle server-side operations. It helps me connect frontend apps with real data."}]},
  ])
   useEffect(()=>{ // banner animation use Effect
     let body=document.getElementsByClassName('back-port')[0]


  if(body){
   
    let typing="";
let para=document.getElementById('para')

let i=0;
 function typingani(){
      typing+=description[i]
  para.innerHTML=typing
  if(description.length==i){
    clearInterval(value)
  }
  i++
  }
  let value=setInterval(()=>{
   typingani()
  },100)
  let namespan=document.querySelectorAll('.namespan')
  
  
  let count=0
  let colorsarray=["red","yellow","green","purble",]
  let random=Math.floor(Math.random()*colorsarray.length)
setInterval(()=>{

namespan.forEach((element,index) => {
 
  
  if(index==count){
element.style.color=colorsarray[random]
element.style.scale="1.2"

  }else{
    element.style.color="navy"
    element.style.scale="1"
  }
});
count++
if(count==namespan.length){
  count=0
  random=Math.floor(Math.random()*colorsarray.length)
}
},100)

  }
  },[])
useEffect(()=>{
      let body=document.getElementsByClassName('back-port')[0]
let cursor=document.getElementsByClassName('ball')[0]
  let date=new Date()
  let hour=date.getHours()
  if(hour<12){
   setDayTime("Morning")
  }else if(hour<16){
 setDayTime("Afternoon")
  }else if(hour<23){
 setDayTime("Evening")
  }
  else{
     setDayTime("Night")
  }

if(body&&cursor){
body.addEventListener("mousemove",(e)=>{
  let {clientX,clientY}=e  
})
}

},[])

  const handlePrint = useReactToPrint({
    content: () => com.current
  });
  console.log(paferefresh);
  
  return (
    <div className='port  '>
      <nav className='row p-2'>
        <h3 className='nav-name  col-6 '>
          <span className='namespan'>A</span>
          <span className='namespan'>b</span>
          <span className='namespan'>d</span>
          <span className='namespan'>u</span>
          <span className='namespan'>l</span>
          <span className='namespan'>m</span>
          <span className='namespan'>a</span>
          <span className='namespan'>l</span>
          <span className='namespan'>i</span>
          <span className='namespan'>k</span>
        </h3>
        <h4 className=' col-6 d-flex align-items-center justify-content-center' style={{color:"navy"}}>Hi,Good {daytime}</h4>
      </nav>
    <div className='banner'>
      <div className='para'>
       <div className='container'>
               <h6 style={{wordSpacing:"2px"}} id='para'>

                  </h6>
        </div>
        
      </div>
      <div className='profile-banner'>
        <img src={devloperimg}/>
      </div>
    </div>
    {/* skills */}
    <div className='skill-section'>
      <div className='container'>
                  <h3 className='text-center mt-2 border-bottom pb-2 pt-2' style={{color:"navy"}}>Skills</h3>

           <div className='row'>
             {skills.map((a,b)=>{
              return <div key={b} className={a.lang=="HTML"?"htmlbox sbox col-12":"skillbox sbox col-12 col-md-4  "}>
                <div className='d-flex justify-content-center  img-container' ><img src={a.logo} style={a.lang=="Bootstrap"?{width:"150px"}:{width:"100px"}}/></div>
                <div className={a.lang=="HTML"?'ps-lg-5':""}>{a.para.map((obj,ind)=>{
               return Object.keys(obj).map((name,num)=>{
                 return  <div key={num}>
                     <h4 className={Object.keys(obj)[num]=="HTML"?"htmlcolor":Object.keys(obj)[num]=="CSS"?"csscolor":Object.keys(obj)[num]=="JavaScript"?"jscolor":Object.keys(obj)[num]=="Bootstrap"?"bootscolor":Object.keys(obj)[num]=="React"?"reactcolor":Object.keys(obj)[num]=="NodeJs"?"nodecolor":""}>
                      {Object.keys(obj)[num]}</h4>
                     <p style={{color:"navy",fontWeight:"bolder",letterSpacing:".5px"}}>{obj[Object.keys(obj)[num]]}</p>
                     
                  </div>
                })
                })}</div>
              </div>
             })}
           </div>
      </div>
    </div>
    <div className='projects-sec container'>
    
        <Project/>
    </div>
   <div className='feedback-sec'>
<Feedback onrefresh={()=>setPageRefresh(prev=>!prev)}/>
   </div>
   <div className='Review-Show'>
      <Review refreshTrigger={paferefresh}/>
   </div>
      <div className='back-port' >
       </div>
       <div className='footer-sec p-3 mt-3'>
        <div className='container'>
          <div className='row'>
    <div className='col-12 col-md-6 d-flex justify-content-center'><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulmalikspl@gmail.com&su=Hello Abdul&body=I saw your portfolio and wanted to connect!">abdulmalikspl@gmail.com</a></div>
          <div className='col-12 col-md-6 d-flex justify-content-center'>
            <div className=' d-flex gap-3 mt-2 mt-md-0'>
              <div><a href='https://www.instagram.com/abd_spl?igsh=ajBtN2Rxd25xdmcx'><img src={insta} style={{width:"20px"}}/></a></div>
                <div><a href="https://wa.me/919047718854" target="_blank"><img src={whats} style={{width:"20px"}}/></a></div>
            </div>
          </div>
          {/* <div className='col-12 col-md-6'></div> */}
        </div>
        </div>
        <div className='d-flex justify-content-center justify-content-md-end mt-1 ' style={{fontWeight:"bolder",color:"navy"}}>&copy;2025-Abdul Mlaik</div>

       </div>
    </div>
  )
}

export default App

 {/* <div className='ball'></div> */}