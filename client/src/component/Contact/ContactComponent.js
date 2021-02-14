import React from 'react';
import "./contact.css";
import emailjs, { send } from "emailjs-com";

function ContactComponent() {

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_5xm59ii', 'template_0y6f7zd', e.target, 'user_ea6we13Io9gaiYI7e2QqJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div>
            <p className="contactTitle">Contact</p>
            <div className="contactDiv">
                <form className="inputForms" onSubmit={sendEmail}>
                    <div className="inputDiv">
                        <input className="inputs" type="text" placeholder="First Name" name="first_name"></input>
                    </div>
                    <div className="inputDiv">
                        <input className="inputs" type="text" placeholder="Last Name" name="last_name"></input>
                    </div>
                    <div className="inputDiv">
                        <input className="inputs" type="email" placeholder="Email" name="email"></input>
                    </div>
                    <div>
                        <textarea className="textAreaDesciption" type="text" placeholder="Description" name="message"></textarea>
                    </div>
                    <button className="contactBtn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent
