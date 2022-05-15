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
                  <img src="https://imgrosetta.mynet.com.tr/file/12215801/728xauto.jpg" className="movielistimg"/>
                  <h4 className="movielistname">Breaking Bad</h4>
                  <p className="movielistdesc">Drama</p>
                  <div className="movielisticon">
                      <img src={bell} className="movielistbell"/>
                      <img src={cam} className="movielistcam"/>
                  </div>
               </div>
               <div className="bodysecond">
               <img src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg" className="movielistimg"/>
                  <h4 className="movielistname">Game of Thrones</h4>
                  <p className="movielistdesc">Medieval Fantasy</p>
                  <div className="movielisticon">
                      <img src={bell} className="movielistbell"/>
                      <img src={cam} className="movielistcam"/>
                  </div>
               </div>
               <div className="bodythird">
               <img src="https://tr.web.img3.acsta.net/pictures/17/05/22/16/49/588696.jpg" className="movielistimg"/>
                  <h4 className="movielistname">Prison Break</h4>
                  <p className="movielistdesc">Delective</p>
                  <div className="movielisticon">
                      <img src={bell} className="movielistbell"/>
                      <img src={cam} className="movielistcam"/>
                  </div>
               </div>
               <div className="bodyfourth">
               <img src="https://i0.wp.com/www.tayfuncatechnology.com/wp-content/uploads/2020/09/mr.robot-Amazon-prime-video.jpg" className="movielistimg"/>
                  <h4 className="movielistname">Mr Robot</h4>
                  <p className="movielistdesc">Drama</p>
                  <div className="movielisticon">
                      <img src={bell} className="movielistbell"/>
                      <img src={cam} className="movielistcam"/>
                  </div>
               </div>
            </div>     
                
             </>
        );
    }
}