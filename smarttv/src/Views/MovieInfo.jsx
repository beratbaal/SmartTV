import React from "react";
import "../CSS/MovieInfo.css";
import { Sidebar } from "./Sidebar";
import { MovieList } from "./MovieList";
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
                <Button buttonStyle="btnBack" path="/"></Button>
                <Input inputStyle="movieinfoinput" placeHolder="Search"/>
            </div>
            <div className="movieinfotitle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/2048px-CNN_International_logo.svg.png" className="movieinfoimg"/>
                <h5 className="movieinfochannel">Channel|103</h5>
                <h2 className="movieinfoimgtitle">CNN</h2>
            </div>
            <div className="movieinfobuttons">
                <Button buttonStyle="btnWatch" path="/VideoJSView">Watch</Button>
                <Button buttonStyle="btnFav"></Button>
            </div>
            <div className="movieinfovideo">
                <h3 className="movieinfovideoheader">Live</h3>
                <img src="https://img.hulu.com/user/v3/artwork/49c889a5-198c-40ed-b75f-bb827b1b9e4f?base_image_bucket_name=image_manager&base_image=cfa6f8f6-2126-4521-87df-69cccc63e044&size=1200x630&format=jpeg&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7C9bfb28b7-c5d2-4793-b2d9-25be36aa59de%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D" className="movieinfovideoposter"/>
               <div className="movieinfoname">
                <h3>21:00-I May Destroy You</h3>
               </div> 
               <div className="movieinfoepidose">
                <h3>S1 : E2 Someone Is Lying</h3>
               </div>

               <div className="movieinfodescription">
                   <span className="movieinfolive">Live</span>
                   <p>The question of sexual consent in contemporary life and how, in the new landscape of dating and relationships, we make the distinction between liberation and exploitation..</p>
               </div>
                <div className="movieinfovideobottom">
                    <p>Programme</p>
                </div>
            </div>
            <div className="movielist">
              <MovieList/>
            </div>
            </>
        );
    }
}