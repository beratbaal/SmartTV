import React from "react";
import "../CSS/Slider.css";




export class Slider extends React.Component {
    constructor(props) {
        super(props);
        
       
    }
    
    render() {
        return (
        
                <div className="containerslider">
    
                    <input type="radio" name="slider" id="item-1" checked className="pointer1" />
                    <input type="radio" name="slider" id="item-2" className="pointer2" />
                    <input type="radio" name="slider" id="item-3" className="pointer3" />
                  
                    <div className="cardsslider">
                        <label className="cardslider" htmlFor="item-1" id="movie-1">
                            <img src="https://wallpaperboat.com/wp-content/uploads/2021/04/26/77106/breaking-bad-08.jpg" className="imgslider"  />
                        </label>
                        <label className="cardslider" htmlFor="item-2" id="movie-2">
                            <img src="https://gamelisher.com/wp-content/uploads/2019/03/prison-Break.jpg" className="imgslider"  />
                        </label>
                        <label className="cardslider" htmlFor="item-3" id="movie-3">
                            <img src="https://i.pinimg.com/originals/b0/bf/92/b0bf927fabb61bb79ef0dffe58a5d3b6.png" className="imgslider"  />
                        </label>
                      
                    </div>
                   
                </div>
                );
    }
}