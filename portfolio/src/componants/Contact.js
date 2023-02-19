import React from "react";
import github from "../images/github.png";
import fb from "../images/fb.png";
import ins from "../images/ins.jpg";
import unknown from "../images/Logo.jpg";

export default function Contact(){
    return(
        <div className="contact">
            <h1>Contact</h1>
            <ul>
                <li><a href="https://github.com/ToTrinhBui/"><img src={github} alt="github" /></a></li>
                <li><a href="https://github.com/ToTrinhBui"><img src={fb} alt="fb" /></a></li>
                <li><a href="https://github.com/"><img src={ins} alt="ins" /></a></li>
                <li><a href="https://github.com/"><img src={unknown} alt="unknown" /></a></li>
            </ul>
        </div>
    )
}