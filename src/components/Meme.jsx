import React, { useState } from "react"
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setMemeImage] = useState(memesData)


    function getMemeImage() {
        let memesArray = allMemeImages.data.memes;
        let randomNum = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNum].url;

        setMeme(oldMeme => {
            return ({
                ...oldMeme,
                randomImage: url
            })
        })
    }


    return (
        <div className="meme--container">
            <input type="text" className="meme--input" placeholder="Enter top text" />
            <input type="text" className="meme--input" placeholder="Enter bottom text" />
            <button className="meme--button" onClick={getMemeImage}>Generate new meme image</button>
            <img className="meme--image" src={meme.randomImage} />
        </div>
    )
}