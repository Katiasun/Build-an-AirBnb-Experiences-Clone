import React from "react";
import "../style.css";
import star from "../imgs/Star.png"


export default function Card(props) {
    let badgeText;
    if(props.dataPropsObject.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if(props.dataPropsObject.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.dataPropsObject.coverImg} alt = "pic" className="card-image"/>
                <div className="card-stats">
                <img src = {star} alt = "star" className="card-star"/>
                    <span>{props.dataPropsObject.stats.rating}</span>
                    <span className="gray">({props.dataPropsObject.stats.reviewCount}) • </span>
                    <span className="gray">{props.dataPropsObject.location}</span>
                </div>
                <p className="card-title">{props.dataPropsObject.title}</p>
                <p className="card-price"><span className="bold">From ${props.dataPropsObject.price}</span> / person</p>
            </div>
    )
}