import React from "react";
import frame from "../images/Frame 7.png"
export default function Project() {
    return (
        <div className="project">
            <h1>My Projects</h1>
            <div className="project-box">
                <div className="project-items">
                    <img src={frame} alt="frame" />
                    <h3>Project Name</h3>
                    <div className="project-tag">
                        <h5>Tag</h5>
                        <h5>Tag</h5>
                    </div>
                    <button>Find out</button>
                </div>
                <div className="project-items">
                    <img src={frame} alt="frame" />
                    <h3>Project Name</h3>
                    <div className="project-tag">
                        <h5>Tag</h5>
                        <h5>Tag</h5>
                    </div>
                    <button>Find out</button>
                </div>
                <div className="project-items">
                    <img src={frame} alt="frame" />
                    <h3>Project Name</h3>
                    <div className="project-tag">
                        <h5>Tag</h5>
                        <h5>Tag</h5>
                    </div>
                    <button>Find out</button>
                </div>
                <div className="project-items">
                    <img src={frame} alt="frame" />
                    <h3>Project Name</h3>
                    <div className="project-tag">
                        <h5>Tag</h5>
                        <h5>Tag</h5>
                    </div>
                    <button>Find out</button>
                </div>
            </div>
        </div>
    )
}