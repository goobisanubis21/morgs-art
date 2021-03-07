import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {

    function showNav() {
        const mobileNav = document.getElementById("mobileNavBar");
        mobileNav.classList.toggle("displayMediaNav")
    }

    return (
        // <>
        //     <div className="mobileHidden" id="navItem">
        //         <div id="border" >
        //             <ul className="nav" id="navBar">
        //                 <hr />
        //                 <li className="nav-item" title="Home Page">
        //                     <Link to="/" >
        //                         HOME
        //                     </Link>
        //                 </li>
        //                 <hr />
        //                 <li className="nav-item" title="Gallery">
        //                     <Link to="/gallery" >
        //                         GALLERY
        //                     </Link>
        //                 </li>
        //                 <hr />
        //                 <li className="nav-item" title="About Me">
        //                     <Link to="/about" >
        //                         ABOUT ME
        //                     </Link>
        //                 </li>
        //                 <hr />
        //                 <li className="nav-item" title="Contact">
        //                     <Link to="/contact" >
        //                         CONTACT ME
        //                     </Link>
        //                 </li>
        //                 <hr />
        //                 <li className="nav-item" title="Cart">
        //                     <Link to="/cart" >
        //                         CART
        //                     </Link>
        //                 </li>
        //                 <hr />
        //             </ul>
        //         </div>
        //     </div>

        //     <div className="hamburger" onClick={showNav}>
        //         <li className="bar"></li>
        //         <li className="bar"></li>
        //         <li className="bar"></li>
        //     </div>
        //     <div className="webHidden" id="mobileNavBar">
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/gallery">Gallery</Link></li>
        //         <li><Link to="/about">About Me</Link></li>
        //         <li><Link to="/contact">Contact Me</Link></li>
        //         <li><Link to="/cart">Cart</Link></li>
        //     </div>
        // </>


        <div className="mainNavDiv">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navMainDiv">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navBarLinks">
                        <Link to="/"><div className="nav-link" title="Home Page">Home</div></Link>
                        <Link to="/about"><div className="nav-link" title="About Us">About</div></Link>
                        <Link to="/gallery"><div className="nav-link" title="Galler">Gallery</div></Link>
                        <Link to="/contact"><div className="nav-link" title="Contact Us">Contact</div></Link>
                        <Link to="/cart"><div className="nav-link" title="Cart">Cart</div></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav
