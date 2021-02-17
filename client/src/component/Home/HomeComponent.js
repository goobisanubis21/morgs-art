import React from 'react';
import "./homeComponent.css";
import genisis from "./genisis.JPG";


function Home() {

    return (
        <div id="homePage">
            <div id="featuredDiv">
                <h1 className="featuredPaintingText">Featured Painting</h1>
                <img id="featuredPainting" alt="genisis" src={genisis}></img>
                <h3>Genisis</h3>
                <h4>painting info</h4>
            </div>
        </div>
    )
}

export default Home
