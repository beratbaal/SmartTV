import React from "react";
import "../CSS/HorizontalCard.css";
import $ from 'jquery'
import { Link } from "react-router-dom"


function customscrolling() {
    $('#ileri').click(function () {

        $('#customH').animate({ scrollLeft: '+=250' });
        return false
    });
    $('#geri').click(function () {
        $('#customH').animate({ scrollLeft: '-=250' });
        return false
    }

    )
}


export class HorizontalCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="containerhorizontalcard">
                
                    <div className="rowhorizontalcard" id="customH">
                   
                        <div className="horizontalcard">
                        <Link to={"/MovieInfo"}>
                            <img src="https://i0.wp.com/dadanizm.wpcomstaging.com/wp-content/uploads/2020/09/i-may-destroy-you.jpeg?fit=1024%2C576&ssl=1" className="imghorizontal" />
                            <div className="horizontalcarddesc">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/2048px-CNN_International_logo.svg.png" className="carddescimglink" />
                                <div className="carddescinfo">
                                    <h5>12:40-I May Destroy You</h5>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="horizontalcard">
                            <img src="https://i4.hurimg.com/i/hurriyet/75/770x0/5c9f3d0d67b0a9160cb338f7.jpg" className="imghorizontal" />
                            <div className="horizontalcarddesc">
                                <img src="https://ida.org.tr/wp-content/uploads/2013/01/discovery-networks2.jpg" className="carddescimg" />
                                <div className="carddescinfo">
                                    <h5>12:50-Our Planet</h5>
                                </div>
                            </div>
                        </div>
                        <div className="horizontalcard">
                            <img src="https://us1-prod-images.disco-api.com/2020/05/11/943a8f26-14b3-3fe9-91ca-ff9a2c8d4380.jpeg?w=1200" className="imghorizontal" />
                            <div className="horizontalcarddesc">
                                <img src="https://seeklogo.com/images/A/Animal_Planet-logo-4559600D22-seeklogo.com.png" className="carddescimg" />
                                <div className="carddescinfo">
                                    <h5>12:40-Too Cute!</h5>
                                </div>
                            </div>
                        </div>
                        <div className="horizontalcard">
                            <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p07hbz98.jpg" className="imghorizontal" />
                            <div className="horizontalcarddesc">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLQW0QZo5KEjGcN27Bf72xIdev4pR3xuhk9R-rpsIg=s900-c-k-c0x00ffffff-no-rj" className="carddescimg" />
                                <div className="carddescinfo">
                                    <h5>01:10-Weather for the Week</h5>
                                </div>
                            </div>
            
                        </div>

                    </div>
                    <div>
                        <button className="btngeri" id="geri" onClick={customscrolling
                        }></button>
                        <button className="btnileri" id="ileri" onClick={customscrolling
                        } ></button>
                    </div>

            </div>
        )
    }
}