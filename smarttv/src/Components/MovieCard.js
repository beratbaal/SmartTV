import React from 'react'
import "../CSS/HorizontalCard.css";

const imagePath = "https://image.tmdb.org/t/p/w500/";

function MovieCard({
  moviename, movieavarage, movieposter
}) {
  return (
<>
    <div class="col-3">

      <div class="card card-block">
        <div className='movieimg'>
          <img src={imagePath + movieposter} />
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default MovieCard