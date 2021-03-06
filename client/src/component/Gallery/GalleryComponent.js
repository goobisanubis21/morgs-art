import React from 'react';
import "./gallery.css";

function GalleryComponent(props) {
    return (
        <div>
            <h5 className="description">-Hand painted with oils on canvas, each peice is a one of a kind modern original-</h5>
            {props.arts.map(art => (
                <div id="gallery" key={art._id}>
                    <h3>{art.title}</h3>
                    <p>
                        <img className="text-focus-in galleryImg" id={art._id} src={art.image} alt={art.title} onClick={(e) => props.zoomed(e)}></img>
                    </p>
                    <p>{art.size}</p>
                    <p>{art.price} USD</p>
                    <button id={art._id} className="btnn" type="submit" onClick={(e) => props.addToCart(e)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default GalleryComponent;
