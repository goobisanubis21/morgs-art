import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
    return (
        <div id="navItem">
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
    );
};

export default Nav
