import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setMemeImage] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;

        setMeme(oldMeme => {
            return ({
                ...oldMeme,
                randomImage: url
            })
        })
    }

    function setMemeText(event) {
        const { name, value } = event.target
        setMeme(oldMeme => ({
            ...oldMeme,
            [name]: value
        }))
    }


    return (
        <div className="meme--container">
            <input
                type="text"
                className="meme--input"
                placeholder="Enter top text"
                name="topText"
                value={meme.topText}
                onChange={setMemeText}
            />
            <input
                type="text"
                className="meme--input"
                placeholder="Enter bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={setMemeText}
            />
            <button
                className="meme--button"
                onClick={getMemeImage}>
                Generate new meme image
            </button>

            <div className="meme">
                <img
                    className="meme--image"
                    src={meme.randomImage}
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}