import React from 'react'


let img_path="https://image.tmdb.org/t/p/w500";
const Card = (movie) => {
  return (
     
    <>
    <div className="movie">
    <img src={img_path+movie.info.poster_path} alt="shows" className="poster"></img>
   
        <div className="movie-details">
        
            <div className="box">
               
                <h4 className="release">{movie.info.release_date}</h4>
                <h4 className="title">{movie.info.title}</h4>
                <p className="rating">{movie.info.vote_average}</p>
               
            </div>
            <div className="overview">
                <h1>overview</h1>
                {movie.info.overview}
            </div>
        </div>
    </div>
   
</>
    
  )
}

export default Card