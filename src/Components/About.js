import React from 'react'
import guide1 from './guide1.png'


const About = () => {
    return (
    <div className='about' style={{display:"flex",alignItems:'center',justifyContent:"center",flexDirection:'column'}}>
        <h1 style={{color:"#cd7700"}}>About us</h1>
    <div className='demo'>
        <p style={{color:"#fff"}}>This beautiful website provides you the best experience of user interface and also helps you to find the movie and series you want to watch</p>
        <h3 style={{color:"#fff"}}>Demo interface is given below for more please signup! </h3>
    </div>
    <img style={{width:"100%"}} src={guide1} alt="guide"/>
    </div>
  )
}

export default About