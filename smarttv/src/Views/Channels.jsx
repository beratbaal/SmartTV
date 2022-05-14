import React from "react";
import "../CSS/Channels.css";
import { Sidebar } from "./Sidebar";


export class Channels extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
          <Sidebar/>
          <div className="channelsheader">
              <div className="header"><h3>TV Channels</h3></div>
             
             <div><input type="text" className="channelsinput" placeholder="Search"/></div> 
              </div>
          
            </>
        )
    }
}