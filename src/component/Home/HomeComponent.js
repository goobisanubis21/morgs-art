import React from 'react';
import "./homeComponent.css";
import genisis from "./genisis.JPG";


function Home() {

    return (
        <div id="homePage">
            <div id= "featuredDiv">
                <h2>Featured Painting</h2>
                <img id="featuredPainting" alt="genisis" src={genisis}></img>
            </div>
        </div>
    )
}

export default Home
