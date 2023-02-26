import React from "react";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card outter">
            <img src={props.image} alt={props.title} />
            <div className="card-infor">
                <div className="location">
                    <img src="../images/location-icon.png" alt="location-icon" />
                    <p>{props.location}</p>
                    <a href={props.googleMapUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )
}