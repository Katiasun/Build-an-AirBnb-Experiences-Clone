import React from "react";
import "../style.css";
import logo from "../imgs/logo.png";


export default function Navbar(props) {
    return (
          <nav>
             <img src={logo} className="nav-logo" alt="logo"/>
        </nav>
    )
}