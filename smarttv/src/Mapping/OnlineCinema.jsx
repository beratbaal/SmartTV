import React from "react";
import MovieCard from "../Components/MovieCard";

export class OnlineCinema extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
          <>
       
                {
                    this.props.movies.map((movie)=>{
                        return <MovieCard  imageUrl={movie.poster_path}/>
                    })
                }
            
          </>
        )
    }
}
  
