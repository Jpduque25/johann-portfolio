import React from "react";
import { useRef, useState } from "react";
import { Squeeze as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Logo from '../assets/Johann-logo-new.png'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navEl = useRef();

    // Slide down from above the window on page load. The navbar sits outside the routes,
    // so this runs on a refresh, not when moving between pages. clearProps drops the
    // inline transform afterwards, otherwise the fixed mobile menu would be positioned
    // relative to the nav instead of the window.
    useGSAP(() => {
        gsap.from(navEl.current, {
            yPercent: -200,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform",
        });
    });

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
        <nav ref = {navEl} className = "site-header-menu">

            <div className="nav-container">

                <div className="site-header-logo">
                    <Link to = "/"> <img src = {Logo} alt = "Logo"/></Link>
                </div>

                <ul className="items">
                    <li><Link to = "/">WORKS</Link></li>
                    <li><Link to = "/gallery">GALLERY</Link></li>
                    <li><Link to = "/about">ABOUT</Link></li>
                    
                    <li><a className="resume" href="https://drive.google.com/file/d/1zu37nXb3uUjeqvepvMEnrTIYmTd-ogm9/view?usp=sharing" target="_blank">RESUME</a></li>
                </ul>
            </div>


            {/*  Hamburger menu  */}

            <div className="mobile-menu">

                <div className="mobile-content">
                    <div className="site-header-logo">
                    <Link to = "/"> <img src = {Logo} alt = "Logo"/></Link>
                    </div>

                    <div className="circle">
                        <Hamburger color = "#F6F6F6" toggled = {isOpen} toggle = {setIsOpen} />
                    </div>

                </div>

                <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
                    <ul className="items">
                        <li><Link to="/" onClick={handleClick}>WORKS</Link></li>
                        <li><Link to="/gallery" onClick={handleClick}>GALLERY</Link></li>
                        <li><Link to="/about" onClick={handleClick}>ABOUT</Link></li>
                        <li>
                        <a
                            className="resume"
                            href="https://drive.google.com/file/d/1QkUTMXW7zp5XXZBzme0OLe3EdN83GpZp/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClick}
                        >
                            RESUME
                        </a>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>

    )

};

export default Navbar;
