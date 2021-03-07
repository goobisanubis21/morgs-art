import React, { useState, useEffect } from 'react';
import GalleryComponent from "../component/Gallery/GalleryComponent";
import API from '../utils/API';
import "./style.css";
// import PaintingComp from "../component/Painting/Painting"
import { useHistory } from "react-router-dom";

function Gallery() {

    const history = useHistory()

    useEffect(() => {
        getArtwork()
    }, [])

    const [arts, setArt] = useState([])
    const [clickedArt, setClickedArt] = useState(() => {
        var storage = localStorage.getItem("values")
        return storage !== null ? JSON.parse(storage) : []
    })
    const [zoomedArt, setZoomedArt] = useState([])

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

    function zoomed(e) {
        const zoomClick = e.target.id
        console.log(zoomClick)
        let zoomedWork = []
        zoomedWork.push(arts.find(zoomedPainting => zoomedPainting._id === zoomClick))
        console.log(zoomedWork)
        setZoomedArt(zoomedWork)
        history.push("/painting/")
    }



    if (window.location.pathname === "/painting/") {
        if (zoomedArt[0] === undefined) {
            window.location.href = "/gallery"
        }

        return (
            <div className={zoomedArt[0].title.split(" ").join("")}>
                <div className="clickedPaintingDiv">
                    <h1 className="clickedPaintingTitle">{zoomedArt[0].title}</h1>
                    <img className="clickedPaintingImg" src={zoomedArt[0].image} alt="clicked painting"></img>
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <h4 id="oilPaintingsTitle">Oil Paintings</h4>
                <GalleryComponent
                    arts={arts}
                    addToCart={addToCart}
                    zoomed={zoomed}
                />
            </div>
        )
    }
}

export default Gallery
