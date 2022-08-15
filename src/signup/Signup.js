import React, { useState } from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useStateValue } from "../Stateprovider";

const Login = () => {
  const [{user},dispatch]=useStateValue();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
    {
        !user?(
        <div className="Login">
          <div className="login-page">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sign">
                <h3>Sign in with your Google account</h3>
              </div>
              <div className="login-input">
                <p>Email or mobile phone number</p>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter the valid email",
                    },
                  })}
                
                />
                <p className="Error">{errors.email?.message}</p>

                <p>Password</p>
                <input
                  type="password"
                  {
                    ...register("password",{
                        required:{
                            value:true,
                            message:'please enter a password'
                        },
                        minLength:{
                            value:6,
                            message:'password must be more than 6'
                        },
                        maxLength:{
                            value:12,
                            message:'password must less than 12'
                        }


                    })
                  }
                />
                <p className="Error">{errors.password?.message}</p>
              </div>
              <div className="signIn-btn">
                <button className="btn-2" >
                  Sign In
                </button>  
              </div>
            </form>
            <div className="create-account">
              <button className="btn-3">create your account</button>
            </div>
    
          </div>
        </div>
        ):<Navigate to="mtgshow"/>  }

    </>
  );
};

export default Login;
