import React from 'react';
import "./gallery.css";
import { Link } from "react-router-dom";

function GalleryComponent(props) {
    return (
        <div id="gallery">
            <h3>{props.title}</h3>
            <p>
            <Link to ="/painting"><img className="text-focus-in galleryImg" id={props.id} src={props.image} alt={props.title}>
                </img></Link>
            </p>
            <p>{props.size}</p>
            <p>{props.price}</p>
            <p>{props.date}</p>
            <button id="btn" type="submit">Add to Cart</button>
        </div>
    )
}

export default GalleryComponent;
