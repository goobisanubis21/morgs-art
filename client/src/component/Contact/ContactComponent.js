import React from 'react';
import "./contact.css";
import emailjs from "emailjs-com";

function ContactComponent() {

    function handleBtn() {
        let firstName = document.getElementById("firstName")
        let lastName = document.getElementById("lastName")
        let email = document.getElementById("email")
        let message = document.getElementById("message")
        const buttonn = document.getElementById("sendEmailBtn")
        
        if (firstName.value && lastName.value && email.value && message.value) {
            buttonn.disabled = false
        } else if ( firstName.value || lastName.value || email.value || message.value === null) {
            buttonn.disabled = true
        }
    }

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_ID1, process.env.REACT_APP_ID2, e.target, process.env.REACT_APP_ID3)
            .then((result) => {
                console.log(result.text);
                alert("Email sent!")
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setTimeout(() => {
                window.location.reload()
            }, 2000);
    }

    return (
        <div className="mainContactDiv">
            <p className="contactTitle">Contact</p>
            <div className="contactDiv">
                <form className="inputForms" onSubmit={sendEmail} onChange={handleBtn}>
                    <div className="inputDiv">
                        <input id="firstName" className="inputs" type="text" placeholder="First Name" name="first_name"></input>
                    </div>
                    <div className="inputDiv">
                        <input id="lastName" className="inputs" type="text" placeholder="Last Name" name="last_name"></input>
                    </div>
                    <div className="inputDiv">
                        <input id="email" className="inputs" type="email" placeholder="Email" name="email"></input>
                    </div>
                    <div>
                        <textarea id="message" className="textAreaDesciption" type="text" placeholder="Description" name="message"></textarea>
                    </div>
                    <button disabled id="sendEmailBtn" className="contactBtn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent
