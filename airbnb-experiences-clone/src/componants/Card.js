import React from "react";
import image_12 from "../images/image 12.png";

import star from "../images/Star 1.png"
export default function Card() {
    return (
        <div className="card">
            <img src={image_12} alt="12" />
            <h5 className="status">Sold out</h5>
            <div className="card-infor">
                <div className="rating">
                    <img src={star} alt="star" />
                    <p>5.0 <span>(6) -USA</span></p>
                </div>
                <p>Life lesson with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}