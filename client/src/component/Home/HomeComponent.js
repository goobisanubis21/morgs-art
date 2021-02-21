import React from 'react';
import "./homeComponent.css";
import { Link } from "react-router-dom";
import genisis from "./genisis.JPG";
import MorgsContact from "./morgsContact.JPG";
import MorgsAbout from "./morgsAbout.JPG";


function Home() {

    return (
        <div id="homePage">
            <div id="featuredDiv">
                <h1 className="featuredPaintingText">Featured Painting</h1>
                <img id="featuredPainting" alt="genisis" src={genisis}></img>
                <h3>Genisis</h3>
                <h4>24" x 48"</h4>
                <h4 className="featuredInfo">Morgan's current featured painting Genisis is a mixed media style portrait made with oils on canvas along with book pages giving it a very unique style.</h4>
                <div className="daVinci">
                    <Link to = "/gallery"><img className="daVinciImg" src="https://res.cloudinary.com/dtodsxdoy/image/upload/v1612839213/MorganArt/golden_hour_yg9d16.jpg" alt="gallery"></img>
                    <h2 className="centered">Visit Gallery</h2>
                    </Link>
                </div>
                <div className="morgansAbout">
                    <Link to = "/about"><img className="morgansAboutImg" src={MorgsAbout} alt="morgs"></img>
                    <h3 className="centered">A Little of Me</h3>
                    </Link>
                </div>
                <div className="morgansContact">
                    <Link to = "/contact"><img className="morgansContactImg" src={MorgsContact} alt="morgs"></img>
                    <h4 className="centered">Get a Commissioned Piece Here!</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
