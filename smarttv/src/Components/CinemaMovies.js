import React, { useContext, useEffect, useState } from 'react'
import "../CSS/OnlineCinema.css";
import { Sidebar } from '../Views/Sidebar';
import { Button } from './Button';
import { Input } from './Input';
import { OnlineCinema } from '../Views/OnlineCinema';

function CinameMovies({

}){
    const imagePath = "https://image.tmdb.org/t/p/w500/";
    const [nowPlayingMovieList, setNowPlayingMovieList] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
    useEffect(()=>{
        Apifetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1', setNowPlayingMovieList)
    },[])
    function Apifetch(url, setList) {
        fetch(url
        ).then(response => {
          return response.json();
        }).then(data => {
    
          const movies = data["results"];
          setList(movies)
          console.log(movies)
        });
      }
      return(
        <>
        <Sidebar/>
           <div className="onlinecinemaheader">
            <Button buttonStyle="btnBack" path="/Channels"></Button>
            <Input inputStyle="movieinfoinput" placeHolder="Search.."></Input>
           </div>
        <div className="onlinecinemamovielist">
            <OnlineCinema movies={nowPlayingMovieList}/>
        </div>
    </>
      )
}
export default CinameMovies