import React from "react";
import { useEffect, useState } from 'react';
import "../CSS/Channels.css";
import { Sidebar } from "./Sidebar";
import { Slider } from "./Slider";
import { HorizontalCard } from "./HorizontalCard";


function Channels(){
    const [topMovieList, setTopMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);
    useEffect(() => {
      Apifetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1',setTopMovieList)
  
    }, []);
    function Apifetch(url,setList){
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
          <div className="channelsheader">
              <div className="header"><h3>TV Channels</h3></div>
             
             <div><input type="text" className="channelsinput" placeholder="Search"/></div> 
              </div>
            <Slider/>
            <div className="horizontalcardheader">
               <a href="#"><p>Live</p></a> 
            </div>
            <HorizontalCard movies={topMovieList}/>
            </>
        )
    
}
export default Channels