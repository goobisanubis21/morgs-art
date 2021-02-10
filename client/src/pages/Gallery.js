import React, { useState, useEffect } from 'react';
import GalleryComponent from "../component/Gallery/GalleryComponent";
import API from '../utils/API';
import "./style.css";

function Gallery() {

    useEffect(() => {
        getArtwork()
    }, [])

    const [arts, setArt] = useState([])

    function getArtwork() {
        API.getArt().then(res => {
            setArt(res.data)
        })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h4 id="oilPaintingsTitle">Oil Paintings</h4>
            <GalleryComponent
                arts={arts}
            />
        </div>
    )
}

export default Gallery
