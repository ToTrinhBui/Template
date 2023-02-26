import React from "react";
import introduce_picture from "../images/intro_picture.png"
export default function Introduce(){
    return(
        <div className="intro">
            <img src={introduce_picture} alt="introduce pictures"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-kind hosts-all without leaving home.</p>
        </div>
    )
}