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
                            <img src="https://m.media-amazon.com/images/M/MV5BMWM0ODU4ZjYtOTg1MC00NmMxLTkwOWUtZGVmYmUwMmQxNDI3XkEyXkFqcGdeQXVyNTU5MzI1OTM@._V1_.jpg" className="imgslider"  />
                        </label>
                        <label className="cardslider" htmlFor="item-2" id="movie-2">
                            <img src="https://www.thathashtagshow.com/wp-content/uploads/2021/05/discovery-shark-week.png" className="imgslider"  />
                        </label>
                        <label className="cardslider" htmlFor="item-3" id="movie-3">
                            <img src="https://img.hulu.com/user/v3/artwork/49c889a5-198c-40ed-b75f-bb827b1b9e4f?base_image_bucket_name=image_manager&base_image=cfa6f8f6-2126-4521-87df-69cccc63e044&size=1200x630&format=jpeg&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7C9bfb28b7-c5d2-4793-b2d9-25be36aa59de%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D" className="imgslider"  />
                        </label>
                      
                    </div>
                   
                </div>
                );
    }
}