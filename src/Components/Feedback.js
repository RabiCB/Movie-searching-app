import React from 'react'
import './feedback.css'
import {useRef} from 'react'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';




const Feedback = () => {

const form = useRef();
const sendEmail=(e)=>{
  emailjs.sendForm(
    'service_i7rjxvn',
    'template_dc8s3ys',
    form.current,
    '2BsGI2e_7dw73C6jf',

    
      
  ).then(
      result=>alert("your message has been delivered sucessfully and thank you!"),
      error=>console.log("something wrong happen")
  )
  e.preventDefault();
}

    
  return (
  <div>
    <form className='body' ref={form} onSubmit={sendEmail}>
    <Link style={{textDecoration:'none'}} to='/header'> <h1 style={{color:'#cd7700',textAlign:'center', fontWeight:'700' ,marginTop:'1rem', fontSize:'1.4rem',marginBottom:'2rem'}}>MTG</h1></Link>
    <h1 className="tag"style={{color:'red'}}>Any queries? and feedback</h1>
    <input className='input-area'name='message' type="text" placeholder='type your query and suggestion'/>
    <input className='email-area' name="email" type="text" placeholder='type your email'/>
    <input className='email-area' name="name" type="text" placeholder='type your name '/>
    <button type="submit" className="submitbtn" value="send">submit</button>
    </form>
    </div>
    
  )
}

export default Feedback