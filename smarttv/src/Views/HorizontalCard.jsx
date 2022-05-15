import React from "react";
import "../CSS/HorizontalCard.css";
import MovieCard from "../Components/MovieCard";
import $ from 'jquery'



function customscrolling(){
    $('#ileri').click(function()
    {
    
        $('#customH').animate( { scrollLeft: '+=250' });
        return false
    });
   $('#geri').click(function()
   {
       $('#customH').animate({scrollLeft: '-=250'});
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
            <div className="customHorizontalCard" id="customH">
                <div class="container-fluid">

                    <div class="row flex-nowrap">

                        {this.props.movies.map((movie) => {

                            return <MovieCard movieposter={movie.poster_path}  />;

                        })}

                        <button className="btngeri" id="geri" onClick={customscrolling
                        }></button>
                        <button className="btnileri" id="ileri" onClick={customscrolling}
                         ></button>
                    </div>
                </div>

            </div>
        )
    }
}