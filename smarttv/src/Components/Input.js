import React from "react";
import "../CSS/Input.css";

const STYLES = ['defaultinput','movieinfoinput'];


export const Input =({
    type,
    inputStyle,
    placeHolder
   

    
}) =>{
    const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

    return(
       
            <input className={`input ${checkInputStyle}`} type={type} placeholder={placeHolder}/>
     
    )
}