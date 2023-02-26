import React from "react";
import logo from "../images/Logo.jpg"
export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo"/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
                <button>Discover my Projects</button>
        </div>
    )
}