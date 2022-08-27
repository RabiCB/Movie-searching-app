import React from 'react'
import './mtg.css'
import {useState} from "react";
import { useEffect } from "react";
import Card from "./Card";
import {UserAuth} from '../signup/Auth'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","comedie"];






const Mtgshow=()=>{
    const {user,logout}=UserAuth();
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    const navigate=useNavigate();
   const handlelogout=async()=>{
    try{
        await logout()
        navigate("/")
        alert("loggedout sucessfully")
    }catch(e){
        console.log(e.message)
    }
   }

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
           
        });
    },[url_set]);
   

    const getData=(movieType)=>{

        if(movieType==="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType==="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType==="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        
        setUrl(url);

    }
    const searchMovie=(evt)=>{
        
        if(evt.key==="Enter")
        {   
            evt.preventDefault();
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }

    }




  return (
   
            <>
            
            <h2 className='logo' >MTG</h2>
            <div className='layout'style={{cursor:'pointer'}}><button className='logout' onClick={handlelogout}>logout</button>
            <p>Email:{user&&user.email}</p></div>
            
            
            <div className='avatar-option'>
            </div>
                <div className="header">
                    <nav>
                        <ul>
                            {
                                arr.map((value,pos)=>{
                                    return(
                                        <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                    )
                                })
                            }
                           
                        </ul>
                    </nav>
                    <form>
                        <div className="search-btn">
                            <input type="text" placeholder="Enter movie"
                            className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                            value={search} onKeyPress={searchMovie}>
                            </input>
                            <button onChange={(e)=>{setSearch(e.target.value)}} onClick={searchMovie}><SearchIcon className="Search"/></button>
                        </div>
                    </form>
                </div>
                <div className="container">
                    {
                        (movieData.length===0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                            return(
                                <Card info={res}  key={pos}/>
                            )
                        })
                    }
                </div>
            </>
        )
    };
  export default Mtgshow;