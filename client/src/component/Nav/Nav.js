import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {

function showNav() {
    const mobileNav = document.getElementById("mobileNavBar");
    mobileNav.classList.toggle("displayMediaNav")
}

    return (
        <>
            <div className="mobileHidden" id="navItem">
                <div id="border" >
                    <ul className="nav" id="navBar">
                        <hr />
                        <li className="nav-item" title="Home Page">
                            <Link to="/" >
                                HOME
                            </Link>
                        </li>
                        <hr />
                        <li className="nav-item" title="Gallery">
                            <Link to="/gallery" >
                                GALLERY
                            </Link>
                        </li>
                        <hr />
                        <li className="nav-item" title="About Me">
                            <Link to="/about" >
                                ABOUT ME
                            </Link>
                        </li>
                        <hr />
                        <li className="nav-item" title="Contact">
                            <Link to="/contact" >
                                CONTACT ME
                            </Link>
                        </li>
                        <hr />
                        <li className="nav-item" title="Cart">
                            <Link to="/cart" >
                                CART
                            </Link>
                        </li>
                        <hr />
                    </ul>
                </div>
            </div>

            <div className="hamburger" onClick={showNav}>
                <li className="bar"></li>
                <li className="bar"></li>
                <li className="bar"></li>
            </div>
            <div className="webHidden" id="mobileNavBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </div>
        </>
    );
};

export default Nav
