import React from "react";
import "../style.css";
import bigPic from "../imgs/big-pic.png";

export default function Hero(props) {
    return (
        <section className="hero">
                <img src={bigPic} className="hero-photo" alt="bigPic"/>
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}