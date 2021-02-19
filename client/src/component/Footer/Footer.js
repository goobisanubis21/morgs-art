import React from 'react';
import "./foot.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className="theFoot">
            <div>
                <h6>Morgan Danton 2021</h6>
            </div>
            <div className="logos">
                <a href="https://www.instagram.com/morgandanton_oilpaintings/"><InstagramIcon /></a>
                <a href="https://www.facebook.com/morgan.danton"><FacebookIcon /></a>
            </div>
        </div>
    )
}

export default Footer
