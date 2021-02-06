import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
    return (
        <div>
            <ul className="nav nav-tabs" id="navBar">
                <li>🎨</li>
                <li className="nav-item" title="Home Page">
                    <Link to="/" >
                        Home
                </Link>
                </li>
                <li className="nav-item" title="Gallery">
                    <Link to="/gallery" >
                        Gallery
                </Link>
                </li>
                <li className="nav-item" title="About Me">
                    <Link to="/about" >
                        About Me
                </Link>
                </li>
                <li className="nav-item" title="Contact">
                    <Link to="/contact" >
                        Contact Me
                </Link>
                </li>
                <li className="nav-item" title="Cart">
                    <Link to="/cart" >
                        Cart
                </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav
