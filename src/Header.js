import React, { useState } from "react";
import "./Header.css";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className="header-container">
                <div className="logo-section">
                    <img
                        src="starter/pizzas/logo.webp"
                        alt="logo"
                        className="logo"
                    />
                    <p className="brand-name">Pizzalleria</p>
                </div>
                <nav className="navigation">
                    <div className="hamburger" onClick={toggleNav}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <header className="header-banner">
                <h1 className="header-title">Fast Pizza Delivery</h1>
                {/* <p className="header-date">
                    <span>{new Date().toLocaleDateString()}</span>
                </p> */}
            </header>
        </>
    );
}

export default Header;
