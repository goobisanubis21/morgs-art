import React from 'react';
import GalleryComponent from "../component/Gallery/GalleryComponent";
import paintings from "../paintingjson/paintings.json";
import "./style.css";

function Gallery() {

    return (
        <div>
            <h4 id="oilPaintingsTitle">Oil Paintings</h4>
            {paintings.map(painting => (
                <GalleryComponent
                    key={painting.id}
                    title={painting.title}
                    image={painting.image}
                    size={painting.size}
                    price={painting.price}
                    date={painting.date}
                />
            ))}
        </div>
    )
}

export default Gallery
