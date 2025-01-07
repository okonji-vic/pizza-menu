import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

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
                    <div className={"hamburger" + (isNavOpen ? " active" : "")}
                        onClick={toggleNav}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
                        <li>
                            <NavLink to="/" exact activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" activeClassName="active">
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
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
