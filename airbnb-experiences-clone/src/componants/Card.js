import React from "react";
// import image_12 from "../images/image-12.png";

import star from "../images/Star 1.png"
export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} alt="present" />
            <h5 className="status">{props.status}</h5>
            <div className="card-infor">
                <div className="rating">
                    <img src={star} alt="star" className="rating-star"/>
                    <p>{props.rating}<span> ({props.reviewCount}) - {props.country}</span></p>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    )
}