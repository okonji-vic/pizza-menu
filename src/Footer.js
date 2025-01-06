import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <p className="p2">Click on the pizza to see the ingredients</p>
            
            {new Date().getHours() > 12 ? <p>Good afternoon</p> : <p className="p3">Good morning</p>}
            {new Date().getHours() > 18 ? <p>Good evening</p> : null}
            {new Date().getHours() > 22 ? <p>Good night</p> : null}
            {new Date().getHours() > 11 && new Date().getHours() < 23 ? <p className="p3">We are currently open</p> : <p className="p3">We are currently closed. Reopens 11:00 - 23:00</p>}
            {/* <p className="p3">We are open from 11:00 to 23:00</p> */}
            <button>Order now</button>
            <p>© {new Date().getFullYear()} Fast Pizza Delivery</p>
        </footer>
    );
}

export default Footer;