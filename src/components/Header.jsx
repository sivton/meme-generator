import React from "react";
import "../index.css";

export default function Header() {
    return (          
        <header className="header--container">
            <img className="header--image" src="https://pngimg.com/d/trollface_PNG1.png"/>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">Meme Generator</h4>
        </header>
    )
}
