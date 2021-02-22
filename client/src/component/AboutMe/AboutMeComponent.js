import React from 'react';
import "./about.css";
import Morgs from "./morgs.png";
import Morgs2 from "./IMG_5321.jpeg";
import Morgs3 from "./otherAboutMorgs.jpeg";

function AboutMeComponent() {
    return (
        <div>
            <div className="aboutImgDiv">
                <h2 className="aboutArtistText">About the Artist</h2>
                <img className="morgs" src={Morgs} alt="Morgs"></img>
            </div>
            <div className="aboutMeInfo card">
                Born in New Jersey, Morgan Danton has been oil painting for the past five years, but her skills far exceed that short amount of time with the brush. Being fascinated with art since the day she was born, Morgan always knew fate would eventually lead her to the life long journey of mastering oils. Since then she has done comissioned work, sold originals, designed tattoos for clients and has done mulitple art shows all over the state. Her photo realism portraits are one of her highlighting factors in her unique style, along with a specific color pallete for each individual piece, they are the center of attention in any room. Morgan's inspirtion is typically not drawn from any other person in the world of art but rather nature and culture.
            </div>
            <div className="moreMorgs">
                <img className="morgs2" src={Morgs2} alt="Morgs2"></img>
                <img className="morgs3" src={Morgs3} alt="Morgs3"></img>
            </div>
        </div>
    )
}

export default AboutMeComponent
