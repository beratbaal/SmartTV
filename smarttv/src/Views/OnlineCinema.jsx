import React from "react";
import { useEffect, useState } from 'react';
import "../CSS/OnlineCinema.css";
import MovieCard from "../Components/MovieCard";

export class OnlineCinema extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
          <>
            <div className="custommoviecard">
                {
                    this.props.movies.map((movie)=>{
                        return <MovieCard title={movie.title} imageUrl={movie.poster_path} average={movie.vote_average}/>
                    })
                }
            </div>
          </>
        )
    }
}
  
