import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Watch from "./Watch";
const Header = () => {
  
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
            fontWeight:"700",
            fontSize:"1.6rem"
          }}>
          MTG
        </h1>
        </Link>
        <Link to="/signin" className="signup-btn">
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
        <Link to="/login">
            <button className="btn-4">Get Started </button>
        </Link>
      </div>
    </div>
   
      <Watch/>
    
   
    
    </>

  );
};

export default Header;