import React from "react";

export default function Meme() {
    return (
        <div className="meme">
            <div className="meme-input">
                <input type="text" placeholder="Top"/>
                <input type="text" placeholder="Bottom" />
            </div>
            <button className="background">Get a new meme image</button>
        </div>
    )
}