import React from 'react';
import "./homeComponent.css";
import { Link } from "react-router-dom";
import genisis from "./genisis.JPG";
import MorgsContact from "./morgsContact.jpeg";
import MorgsAbout from "./image_6487327.JPG";
import Breath from "./breath.jpg"


function Home() {

    return (
        <div id="homePage">
            <div id="featuredDiv">
                <h1 className="featuredPaintingText">Featured Painting</h1>
                <img id="featuredPainting" alt="genisis" src={genisis}></img>
                <div className="card featuredCard">
                    <div className="card-body">
                        <h3>Genisis</h3>
                        <h4>24" x 48"</h4>
                        <h4 className="featuredInfo">Morgan's current featured painting Genisis is a mixed media style portrait made with oils on canvas along with book pages giving it a very unique style.</h4>
                    </div>
                </div>
                <div className="bonnie">
                    <div className="morgansAbout">
                        <Link to="/about"><img className="morgansAboutImg" src={MorgsAbout} alt="morgs"></img>
                            <h3 className="centered">A Little of Me</h3>
                        </Link>
                    </div>
                    <div className="breathDivImg">
                        <Link to="/gallery"><img className="breathImgImg" src={Breath} alt="gallery"></img>
                            <h3 className="centered">Visit Gallery</h3>
                        </Link>
                    </div>
                    <div className="morgansContact">
                        <Link to="/contact"><img className="morgansContactImg" src={MorgsContact} alt="morgs"></img>
                            <h4 className="centered">Get a Commissioned Piece Here!</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
