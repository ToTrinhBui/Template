import React from "react";
import datalist from '../data';
export default function Meme() {
    let imageUrl
    function getImage(){
        const memeArray = datalist.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        imageUrl = memeArray[randomNumber].url
        console.log(imageUrl)
    }

    return (
        <div className="meme">
            <div className="meme-input">
                <input type="text" placeholder="Top" />
                <input type="text" placeholder="Bottom" />
            </div>
            <button className="background" onClick={getImage}>
                Get a new meme image
            </button>
        </div>
    )
}