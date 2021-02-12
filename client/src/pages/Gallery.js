import React, { useState, useEffect } from 'react';
import GalleryComponent from "../component/Gallery/GalleryComponent";
import API from '../utils/API';
import "./style.css";

function Gallery() {

    useEffect(() => {
        getArtwork()
    }, [])

    const [arts, setArt] = useState([])
    const [clickedArt, setClickedArt] = useState(() => {
        var storage = localStorage.getItem("values")
        return storage !== null ? JSON.parse(storage) : []
    })

    function getArtwork() {
        API.getArt().then(res => {
            setArt(res.data)
        })
            .catch(err => console.log(err))
    }

    function addToCart(e) {
        const click = e.target;
        let getPainting = [...clickedArt]
        getPainting.push(arts.find(artPainting => artPainting._id === click.id))
        console.log(getPainting)
        setClickedArt(getPainting)
        console.log(...clickedArt)
        localStorage.setItem("values", JSON.stringify(getPainting))
    }

    return (
        <div>
            <h4 id="oilPaintingsTitle">Oil Paintings</h4>
            <GalleryComponent
                arts={arts}
                addToCart={addToCart}
            />
        </div>
    )
}

export default Gallery
