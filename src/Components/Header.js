import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Watch from "./Watch";
import{actionTypes} from '../reducer'
import { auth,provider } from "../firebase";
import { useStateValue } from "../Stateprovider";




const Header = () => {
  const [{user},dispatch]=useStateValue();
  const signIn=()=>{
    auth.signInWithPopup(provider)
    .then((result)=>{
      dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
      })
      

    }).catch((err)=>alert(err.message)
    )
  };
  return (
    <>
    <div className="Visual">
      <div className="Visual-top">
        <Link to="/header" style={{textDecoration:'none'}}exact>
        <h1
          style={{
            color: "#cd7700",
            cursor: "pointer",
            textdecoration: "none",
          }}>
          MTG
        </h1>
        </Link>


         

  
        <Link to="/signup" className="signup-btn">
          sign up
        </Link>
      </div>
      <div className="visual-content">
        <h1>
          Unlimted Movies,Tv <br></br> shows, and more.
        </h1>
        <p>Search Everything. Anywhere</p>
        <p>
          Are you ready to search? If you have<br></br> account log in here.
        </p>

        <input
          type="Email"
          className="input-field"
          placeholder="email address"
        ></input>
         
        <Link to="/mtgshow">
            <button className="btn-4" onClick={signIn}>Get Started </button>
        </Link>
      </div>
    </div>
   
      <Watch/>
    
   
    
    </>

  );
};

export default Header;