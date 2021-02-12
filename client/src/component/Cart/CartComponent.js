import React from 'react'
import GalleryComponent from "../../component/Gallery/GalleryComponent";

function CartComponent() {

    var value = JSON.parse(localStorage.getItem("values"))
    if (!value) {
        return (
            <h1>Cart is empty</h1>
        )
    }

    return (
        <div>
            <GalleryComponent 
                arts={value}
            />
        </div>
    )
}

export default CartComponent
