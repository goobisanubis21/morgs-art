import React from 'react';
import "./gallery.css";
import { Link } from "react-router-dom";

function GalleryComponent(props) {
    return (
        <div>
            {props.arts.map(art => (
                <div id="gallery" key={art._id}>
                    <h3>{art.title}</h3>
                    <p>
                        {/* <Link to="/clicked"> */}
                            <img className="text-focus-in galleryImg" id={art._id} src={art.image} alt={art.title} onClick={() => props.clicked()}></img>
                        {/* </Link> */}
                    </p>
                    <p>{art.size}</p>
                    <p>{art.price}</p>
                    <button id="btn" type="submit">Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default GalleryComponent;
