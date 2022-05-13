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
            </>
        )
    }
}