import "./App.css";
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mtgshow from "./MTGhome/Mtgshow";
import Header from "./Components/Header";
import Login from "./signup/Login";
import SignIn from "./signup/SignIn";
import {AuthContextProvider} from './signup/Auth'
import ProtectedRoute from "./signup/ProtectedRoute";
import About from './Components/About'
import Feedback from "./Components/Feedback";


function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
  
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/mtgshow" element={
            <ProtectedRoute>
             <Mtgshow/>
            </ProtectedRoute>
          }></Route>
         
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/about"element={<About/>}></Route>
          <Route path="/feedback"element={<Feedback/>}></Route>
    
        </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
   
  );
}

export default App;