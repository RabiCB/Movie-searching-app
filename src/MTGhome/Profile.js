import React from 'react'
import {Avatar} from '@mui/material';
import './profile.css'

function Profile({src , title}) {
  return (
    <div className="Profile">
      {src && <Avatar src={src}/>}
      <h3>{title}</h3>

    </div>
  )
}

export default Profile;