import React from "react";
import listen from "../images/Listening.png";
import team_work from "../images/team-work.png";
import creative from "../images/creative.png";
export default function Skill() {
    return (
        <div className="skill">
            <h1>Soft skills</h1>
            <div className="skill-box">
                <div className="skill-items">
                    <img src={listen} alt="listening" />
                    <h2>Listening</h2>
                    <p>Describe something bla bla bla bla bla bla bla bla bla bla</p>
                </div>
                <div className="skill-items">
                    <img src={team_work} alt="team_work" />
                    <h2>Team work</h2>
                    <p>Describe something bla bla bla bla bla bla bla bla bla bla</p>
                </div>
                <div className="skill-items">
                    <img src={creative} alt="creative" />
                    <h2>Creative</h2>
                    <p>Describe something bla bla bla bla bla bla bla bla bla bla</p>
                </div>
            </div>
        </div>
    )
}