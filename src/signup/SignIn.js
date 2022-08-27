import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Auth";

const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
 const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/mtgshow");
      alert("signed in sucessfully")
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="SignIn">
    <Link style={{textDecoration:'none'}}to ="/"><h1 style={{color:'#cd7700',marginBottom:'1rem',cursor:'pointer'}}>MTG</h1></Link>
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <div className="sign">
            <h3>Sign up with your own account</h3>
          </div>
          <div className="login-input">
            <p>Email or Username</p>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
             
            />
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signIn-btn">
            <button type="submit" className="btn-2">
              Signup
            </button>
          </div>
        </form>
        <Link to="/login">
          <div className="create-account">
            <button className="btn-3">already have account?</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
