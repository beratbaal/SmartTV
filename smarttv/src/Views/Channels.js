import React from "react";
import { useEffect, useState } from 'react';
import "../CSS/Channels.css";
import { Sidebar } from "./Sidebar";
import { Slider } from "./Slider";
import { HorizontalCard } from "./HorizontalCard";
import { Input } from "../Components/Input";


function Channels(){
   
  
        return(
            <>
       
          <div className="channelsheader">
              <div className="header"><h3>TV Channels</h3></div>
             
             <div><Input placeHolder="Search"/></div> 
              </div>
            <Slider/>
            <div >
               <a href="#" className="horizontalcardheader"><p>Live</p></a> 
            </div>
            <HorizontalCard />
            </>
        )
    
}
export default Channels