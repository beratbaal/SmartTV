import React from "react";
import "../CSS/MovieInfo.css";
import { Sidebar } from "./Sidebar";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";

export class MovieInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <Sidebar/>
            <div className="movieinfoheader">
                <Button buttonStyle="btnBack" path="/Channels"></Button>
                <Input inputStyle="movieinfoinput" placeHolder="Search"/>
            </div>
            <div className="movieinfotitle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/2048px-CNN_International_logo.svg.png" className="movieinfoimg"/>
                <h5 className="movieinfochannel">Channel|103</h5>
                <h2 className="movieinfoimgtitle">CNN</h2>
            </div>
            <div className="movieinfobuttons">
                <Button buttonStyle="btnWatch">Watch</Button>
                <Button buttonStyle="btnFav"></Button>
            </div>
            <div className="movieinfovideo">
                <h3 className="movieinfovideoheader">Live</h3>
                <img src="https://wallpaperboat.com/wp-content/uploads/2021/04/26/77106/breaking-bad-08.jpg" className="movieinfovideoposter"/>
               <div className="movieinfoname">
                <h3>21:00 - Breaking Bad</h3>
               </div> 
               <div className="movieinfoepidose">
                <h3>S1 : E2 Cat's in the Bag...</h3>
               </div>

               <div className="movieinfodescription">
                   <span className="movieinfolive">Live</span>
                   <p>A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.</p>
               </div>
                <div className="movieinfovideobottom">
                    <p>Programme</p>
                </div>
            </div>

            </>
        );
    }
}