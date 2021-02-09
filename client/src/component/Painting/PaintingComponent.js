import React from 'react';
import { Link } from "react-router-dom";
import "./painting.css";

function PaintingComponent(props) {
    return (
        <div>
            <Link to="/gallery"><h5 id="goBack">Go Back To Gallery</h5></Link>
            <h2 id="paintings">{props.title}</h2>
        </div>
    )
}

export default PaintingComponent
