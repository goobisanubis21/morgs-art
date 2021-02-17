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
                <h4>24" x 48"</h4>
                <h4 className="featuredInfo">Morgan's current featured painting Genisis is a mixed media style portrait made with oils on canvas along with book pages giving it a very unique style.</h4>
            </div>
        </div>
    )
}

export default Home
