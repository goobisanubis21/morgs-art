import React from 'react';
import CartComponent from "../component/Cart/CartComponent";

function Cart() {

    function removeFromCart(e) {
        const remove = e.target;
        let getPainting = JSON.parse(localStorage.getItem("values"))
        getPainting = getPainting.filter((getPainting) => getPainting._id !== remove.id);
        console.log(getPainting)
        localStorage.setItem("values", JSON.stringify(getPainting))
        window.location.reload()
    }

    var value = JSON.parse(localStorage.getItem("values"))
    if (!value || value.length === 0) {
        return (
            <h1 className="emptyCart">Cart is empty</h1>
        )
    }
    return (
        <div>
            <h1 className="cartTitle">Cart</h1>
            <CartComponent 
                value={value}
                removeFromCart={removeFromCart}
            />
        </div>
    )
}

export default Cart
