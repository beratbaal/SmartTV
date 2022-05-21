import React from "react";
import "../CSS/MovieCard.css"

const imagePath="https://image.tmdb.org/t/p/w500/";

function MovieCard({
    title,imageUrl,average
}){
    
    
    return(
        <div className="moviecardcontainer">
            <div className="moviecardbody">
                <img src={imagePath +imageUrl} className="cinemamovieimg"/>
            </div>
            <div className="moviecardinfo">
                <h4 className="movietitle">{title}</h4>
                <p className="movieaverage">{average}</p>
            </div>
        </div>
    )
}

export default MovieCard