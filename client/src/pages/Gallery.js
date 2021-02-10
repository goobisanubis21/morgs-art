import React, { useState, useEffect } from 'react';
import GalleryComponent from "../component/Gallery/GalleryComponent";
import API from '../utils/API';
import "./style.css";

function Gallery() {

    useEffect(() => {
        getArtwork()
    }, [])

    const [arts, setArt] = useState([])
    const [clickedArt, setClickedArt] = useState([])

    function getArtwork() {
        API.getArt().then(res => {
            setArt(res.data)
        })
            .catch(err => console.log(err))
    }

    function clicked(e) {
        e = window.event
        const click = e.target;
        const getPainting = arts.find(artPainting => artPainting._id === click.id)
        console.log(getPainting)
        setClickedArt(getPainting)
        console.log(clickedArt)
    }

    return (
        <div>
            <h4 id="oilPaintingsTitle">Oil Paintings</h4>
            <GalleryComponent
                arts={arts}
                clicked={clicked}
            />
        </div>
    )
}

export default Gallery
