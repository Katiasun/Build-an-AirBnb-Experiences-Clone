import React from "react";
import "../style.css";
import star from "../imgs/Star.png"


export default function Card(props) {
    return (
            <div className="card">
                <img src={props.img} alt = "pic" className="card-image"/>
                <div className="card-stats">
                <img src = {star} alt = "star" className="card-star"/>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-price"><span className="bold">From ${props.prise}</span> / person</p>
            </div>
    )
}