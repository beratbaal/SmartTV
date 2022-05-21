import React from "react";
import "../CSS/Sidebar.css";
import { Link } from "react-router-dom";
import menu from "../Images/menu.png"

function openNav() {
    document.getElementById("Sidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("Sidebar").style.width = "0";
  }

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div id="Sidebar" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="headersidebar">
                        <img src="https://cdn-icons-png.flaticon.com/128/3567/3567356.png" className="smarttvlogo"/>
                        <h2>Smart TV</h2></div>
                    <div className="sidebarlist">
                    <ul>
                        <li><a href="#"><img src="https://img.icons8.com/windows/2x/home.png" className="listimage"/>Home</a></li>
                       <Link to={"/"}><li><a href="#"><img src="https://img.icons8.com/ios/2x/tv.png" className="listimage"/>TV Channels</a></li></Link> 
                        <li><a href="#"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/2x/external-app-essentials-tanah-basah-basic-outline-tanah-basah-2.png" className="listimage"/>Streaming Services</a></li>
                       <Link to={"/OnlineCinema"}><li><a href="#"><img src="https://img.icons8.com/material-outlined/2x/documentary.png" className="listimage"/>Online Cinema</a></li></Link> 
                        <li><a href="#"><img src="https://img.icons8.com/material-outlined/2x/christmas-star.png" className="listimage"/>Library</a></li>
                        <li><a href="#"><img src="https://img.icons8.com/material-outlined/2x/settings.png" className="listimage"/>Settings</a></li>
                    </ul>
                    </div>
                    <div className="sidebarbottom">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Westworld_Logo.svg/640px-Westworld_Logo.svg.png" className="sidebarprofil"/>
                        <p>Berat Bal</p>
                    </div>
                </div>
                <span onClick={openNav}>
                   <img src={menu} className="hamburger-icon"/>
                </span>

            </>
        )
    }
}




