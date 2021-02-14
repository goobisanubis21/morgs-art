import React from 'react';
import "./cart.css";

function CartComponent(props) {

    var total = props.value
    console.log(total)
    let prices = []
    for (let i = 0; i < total.length; i++) {
        prices.push(parseInt(total[i].price))
        console.log(prices)
    }

    var sum = prices.reduce(function (a, b) {
        return a + b
    })

    var calcTax = sum * .07;

    var tax = calcTax.toFixed(2);

    var shipping = sum * .1;

    var youPay = sum + calcTax + shipping;

    return (
        <div>
            {props.value.map(art => (
                <div id="gallery" key={art._id}>
                    <h3>{art.title}</h3>
                    <p>
                        <img className="text-focus-in galleryImg" id={art._id} src={art.image} alt={art.title}></img>
                    </p>
                    <p>{art.size}</p>
                    <p>{art.price} USD</p>
                    <button id={art._id} className="removeBtnn" type="submit" onClick={(e) => props.removeFromCart(e)}>Remove From Cart</button>
                </div>
            ))}
            <div className="checkoutBtnDiv">
                <div className="total">
                    <p><strong>Total Paintings:</strong> {sum} USD</p>
                    <p><strong>Tax:</strong> {tax} USD</p>
                    <p><strong>Shipping and Handling</strong>: {shipping} USD</p>
                    <p><strong>Total:</strong> {youPay} USD</p>
                </div>
                <button className="checkoutBtn">Checkout</button>
            </div>
        </div>
    )
}

export default CartComponent
