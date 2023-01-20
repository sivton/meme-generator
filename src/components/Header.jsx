import React from "react";
import "../index.css";

export default function Header() {
    return (          
        <header className="header--container">
            <img className="header--image" src="../images/troll-face.png"></img>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">Meme Generator</h4>
        </header>
    )
}
