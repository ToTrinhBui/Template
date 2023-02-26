import React from "react";
// import image_12 from "";

import star from "../images/Star 1.png"
export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.status === 0) {
        badgeText = "SOLD OUT"
    } else if (props.status === 1) {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <img src={require(`../images/${props.img}`)} alt="present" />
            {badgeText && <h5 className="status">{badgeText}</h5>}
            {/* <h5 className="status">{badgeText}</h5> */}
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