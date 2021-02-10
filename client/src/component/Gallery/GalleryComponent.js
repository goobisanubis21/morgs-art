import React from 'react';
import "./gallery.css";
import { Link } from "react-router-dom";

function GalleryComponent(props) {
    return (
        <div id="gallery">
            {props.arts.map(art => (
                <div key={art._id}>
                    <h3>{art.title}</h3>
                    <p><Link to="/painting"><img className="text-focus-in galleryImg" id={art.id} src={art.image} alt={art.title}></img></Link></p>
                    <p>{art.size}</p>
                    <p>{art.price}</p>
                    <p>{art.date}</p>
                    <button id="btn" type="submit">Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default GalleryComponent;
