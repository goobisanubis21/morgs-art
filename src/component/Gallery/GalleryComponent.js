import React from 'react';
import "./gallery.css";

function GalleryComponent(props) {
    return (
        <div id="gallery">
            <h3>{props.title}</h3>
            <p><img id="galleryImg" src= {props.image} alt={props.title}></img></p>
            <p>{props.price}</p>
            <p>{props.date}</p>
            <button id="btn" type="submit">Add to Cart</button>
        </div>
    )
}

export default GalleryComponent
