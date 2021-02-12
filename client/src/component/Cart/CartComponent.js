import React from 'react';
import "./cart.css";

function CartComponent(props) {
    return (
        <div>
            {props.value.map(art => (
                <div id="gallery" key={art._id}>
                    <h3>{art.title}</h3>
                    <p>
                        <img className="text-focus-in galleryImg" id={art._id} src={art.image} alt={art.title}></img>
                    </p>
                    <p>{art.size}</p>
                    <p>{art.price}</p>
                    <button id={art._id} className="removeBtnn" type="submit" onClick={(e) => props.removeFromCart(e)}>Remove From Cart</button>
                </div>
            ))}
            <div className="checkoutBtnDiv">
                <button className="checkoutBtn">Checkout</button>
            </div>
        </div>
    )
}

export default CartComponent
