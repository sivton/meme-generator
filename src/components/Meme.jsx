import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        let memesArray = memesData.data.memes;
        let randomNum = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNum].url;
        setMemeImage(memesArray[randomNum].url)
    }


    return (
        <div className="meme--container">
            <input type="text" className="meme--input" placeholder="Enter top text" />
            <input type="text" className="meme--input" placeholder="Enter bottom text" />
            <button className="meme--button" onClick={getMemeImage}>Generate new meme image</button>
            <img className="meme--image" src={memeImage}/>
        </div>
    )
}