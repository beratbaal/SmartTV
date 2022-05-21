import React from "react";
import "../CSS/MovieCard.css"

const imagePath="https://image.tmdb.org/t/p/w500/";

function MovieCard({
    imageUrl
}){
    
    
    return(
        <div className="moviecardcontainer">
            <div className="moviecardbody">
                <img src={imagePath +imageUrl} className="cinemamovieimg"/>
            </div>
           
        </div>
    )
}

export default MovieCard