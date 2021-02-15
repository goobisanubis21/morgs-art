import React from 'react';
import "./cart.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";



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

    toast.configure()

    async function handleToken(token) {
        const response = await axios.post("http://localhost:3001/checkout", {
            token,
            total,
            youPay
        });
        const {status} = response.data
        if (status === "success") {
            toast("Success! Check email for details.",
            { type: "success"})
        } else {
            toast("Something went wrong", 
            { type: "error"})
        }
    }

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
                <div className="checkoutBtn">
                    <StripeCheckout
                        stripeKey="pk_test_51IFVIrC94ABBpAEbBUTI0fN8SzkU4p56lCQF3OUl4bXvEkfJqVIDejRvsGdcT0WVCjekqFk0kAJc46lcOW53mrK000iMVNvx0W"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={youPay * 100}
                        name= {"painting"}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartComponent
