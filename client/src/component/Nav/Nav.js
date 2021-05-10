import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {

    return (
        <div className="mainNavDiv">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navMainDiv">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navBarLinks">
                        <Link to="/" onClick={() => setTimeout(() => {window.location.reload()}, 2)}><div className="nav-link" title="Home Page">Home</div></Link>
                        <Link to="/about" onClick={() => setTimeout(() => {window.location.reload()}, 2)}><div className="nav-link" title="About Us">About</div></Link>
                        <Link to="/gallery" onClick={() => setTimeout(() => {window.location.reload()}, 2)}><div className="nav-link" title="Galler">Shop</div></Link>
                        <Link to="/contact" onClick={() => setTimeout(() => {window.location.reload()}, 2)}><div className="nav-link" title="Contact Us">Contact</div></Link>
                        <Link to="/cart" onClick={() => setTimeout(() => {window.location.reload()}, 2)}><div className="nav-link" title="Cart">Cart</div></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav
