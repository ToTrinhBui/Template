import React from "react";
import logo from "../images/Logo.jpg"

export default function Information() {
    return (
        <div className="infor">
            <div className="split left">
                <div className="content">
                    <strong>
                        <p>Hi! I'm glad to see u <span>:)</span> through this website?</p>
                        <p>Let's me introduce something about myself.</p>
                    </strong>
                    <button>Let's talk</button>
                </div>
            </div>
            <div className="split right">
                <div className="khung center">
                    <img src={logo} className="center" alt="anhthe" />
                </div>
            </div>
        </div>
    )
}