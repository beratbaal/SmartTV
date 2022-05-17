import React from "react";
import "../CSS/MovieList.css";
import bell from "../Images/bell.png"
import cam from "../Images/cam.png"

export class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <>

             <div className="movielistheader"><h4>Programme</h4></div>
            <div className="movielistdate">
              <a href="#"className="today">Today</a> 
                <a href="#" className="tomorrow">Tomorrow</a>
                <a href="#" className="selectdate">Select Date</a>
            </div>
            <div className="movielistbody">
               <div className="bodyfirst">
                  <img src="https://pbs.twimg.com/profile_images/925092227667304448/fAY1HUu3_400x400.jpg" className="movielistimg"/>
                  <h4 className="movielistname">Newsroom</h4>
                  <p className="movielistdesc">Newseoom with Rosemary Church</p>
                  <div className="movielisticon">
                     <a href="#"><img src={bell} className="movielistbell"/></a> 
                     <a href="#"> <img src={cam} className="movielistcam"/></a>
                  </div>
               </div>
               <div className="bodysecond">
               <img src="https://pbs.twimg.com/profile_images/1223219067764510720/uSNMBoWU_400x400.jpg" className="movielistimg"/>
                  <h4 className="movielistname">Early Start</h4>
                  <p className="movielistdesc">Buisiness Show</p>
                  <div className="movielisticon">
                    <a href="#"><img src={bell} className="movielistbell"/></a>  
                      <a href="#"><img src={cam} className="movielistcam"/></a>
                  </div>
               </div>
               <div className="bodythird">
               <img src="https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/6be5a01b-cca4-485b-a402-ab8600d3eec3/6218bd5c-9598-47b5-8d93-ab8600d3eec3/image.jpg?t=1623353449&size=Large" className="movielistimg"/>
                  <h4 className="movielistname">Amanpour</h4>
                  <p className="movielistdesc">Delective</p>
                  <div className="movielisticon">
                     <a href="#"><img src={bell} className="movielistbell"/></a> 
                      <a href="#"><img src={cam} className="movielistcam"/></a>
                  </div>
               </div>
               <div className="bodyfourth">
               <img src="https://edition.cnn.com/audio/static/images/podcasts/the-lead-square-l.c1935250.jpg" className="movielistimg"/>
                  <h4 className="movielistname">The Lead</h4>
                  <p className="movielistdesc">Jake Trapper covers all the day</p>
                  <div className="movielisticon">
                      <a href="#"><img src={bell} className="movielistbell"/></a>
                      <a href="#"><img src={cam} className="movielistcam"/></a>
                  </div>
               </div>
            </div>     
                
             </>
        );
    }
}