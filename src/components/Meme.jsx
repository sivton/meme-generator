import React from "react"
import "../index.css";

export default function Meme() {
    return (
        <form className="meme--container">
            <input type="text" className="meme--input" placeholder="Enter top text" />
            <input type="text" className="meme--input" placeholder="Enter bottom text" />
            <button className="meme--button">Generate new meme image</button>
        </form>
    )
}