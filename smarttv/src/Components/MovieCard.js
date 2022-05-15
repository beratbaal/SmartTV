import React from 'react'
import "../CSS/HorizontalCard.css";
import { Link } from 'react-router-dom';

const imagePath = "https://image.tmdb.org/t/p/w500/";

function MovieCard({
  movieposter
}) {
  
  return (
<>
    <div class="col-3">
      <Link to={"/MovieInfo"}>
      <div class="card card-block">
        <div className='movieimg'>
          <img src={imagePath + movieposter} />
        </div>
      </div>
      </Link>
    </div>
   
    
    </>
  )
}

export default MovieCard