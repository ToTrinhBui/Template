import React from "react";
import datalist from '../data';
export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(datalist)

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        let imageUrl = memeArray[randomNumber].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage: imageUrl
        }))
    }

    return (
        <div className="meme">
            <div className="meme-input">
                <input type="text" placeholder="Top" />
                <input type="text" placeholder="Bottom" />
            </div>
            <button className="background" onClick={getMemeImage}>
                Get a new meme image
            </button>
            <img src={meme.randomImage} alt='memeImage' className="meme-image"/>
        </div>
    )
}