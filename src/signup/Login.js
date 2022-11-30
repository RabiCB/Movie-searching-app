import React, { useState } from "react";
import "./Login.css";
import { useNavigate,Link } from "react-router-dom";
import { UserAuth } from "./Auth";

const Login = () => {
  const { login } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
 
  const handleSubmit= async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      alert("logged in sucessfully")
      navigate("/mtgshow");
  
      
      
    } catch (e) {
      setError(<div>
        <p style={{marginBottom:"0.4rem"}}>
        E-mail and password not matched<br/>
        <span style={{color:'#333'}}>If you don't have account ?</span>
        </p>
       <Link style={{textDecoration:'none'}}to="/signin"><p  style={{fontSize:'1.2rem',color:'blue',textDecoration:'none',cursor:'pointer'}}>
          create here 
        </p></Link>
        </div>);
      console.log(e.message);
      
  
    }
  };
 

  return (
    <>
    
      <div className="Login">
        <Link style={{textDecoration:'none'}}to ="/"><h1 style={{color:'#cd7700',marginBottom:'1rem',cursor:'pointer'}}>MTG</h1></Link>
        <div className="error">{error}</div>
        <div className="login-page">
          <form onSubmit={handleSubmit}>
            <div className="sign">
              <h3>login in with your account</h3>
            </div>
            <div className="login-input">
              <div>Email or mobile phone number</div>
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
                LogIn
              </button>
            </div>
          </form>
          <Link style={{textDecoration:"none"}}to="/signin">
          <div className="create-account">
            <button className="btn-3">create your account</button>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
