import React from "react";
import "../style.css";
// import swimmer from "../imgs/swimmer.png";
import star from "../imgs/Star.png"


export default function Card(props) {
    return (
        <div className="cards">
            <img src={props.img} alt = "pic" className="card-image"/>
            <div className="card-stats">
            <img src = {star} alt = "star" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.prise}</span> / person</p>
        </div>
    )
}