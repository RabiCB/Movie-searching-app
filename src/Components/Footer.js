import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const footer = () => {
  return (
    <div className='footer'>
        <Link to="/about"style={{textDecoration:'none'}}><li style={{color:'#fff'}}>About us</li></Link>
        <li><a href="https://www.facebook.com/Movie-tonight-107704642051813">facebook</a></li>
        <Link to="/feedback" style={{color:'white',textDecoration:'none',}}><li>feedback</li></Link>
    </div>
  )
}

export default footer
