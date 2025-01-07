import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
        <div className="menu-container">
            <h1 className="menu-title">Menu</h1>
            <p className="menu-description">In progress. Our menu is coming soon!</p>
            <Link to="/" className="menu-link">
                <button className="menu-button">Go Back</button>
            </Link>
        </div>
    );
}

export default Menu;
