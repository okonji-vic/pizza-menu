import React from "react";
import "./Header.css";

function Header() {
    return (
        <>
        <header>
            FAST PIZZA DELIVERY
            
        </header>
        <div>
        <p className="date"><span>{new Date().toLocaleDateString()}</span></p>
        
        </div>
        </>
    );
}

export default Header;