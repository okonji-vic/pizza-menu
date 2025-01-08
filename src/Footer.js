import React from "react";
import "./Footer.css";

function Footer() {
    const interval = 1000;
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, interval);
        return () => {
            clearInterval(intervalId);
        };
    },
    []);

    return (
        <footer>
            {/* <p className="p2">Click on the pizza to see the ingredients</p> */}
            
            {new Date().getHours() >= 12 && new Date().getHours() < 18? <p className="p3">Good afternoon</p> : null}
            {new Date().getHours() < 12 ? <p className="p3">Good morning</p> : null}
            {new Date().getHours() >= 18 && new Date().getHours() < 23? <p className="p3">Good evening</p> : null}
            {new Date().getHours() >= 23 ? <p className="p3">Good night</p> : null}
            {new Date().getHours() >= 11 && new Date().getHours() < 23 ? <p className="p3" ><span id="p3-time">{time}</span> We are currently open</p> : <p className="p3">We are currently closed. Reopens 11:00 - 23:00</p>}
            {/* <p className="p3">We are open from 11:00 to 23:00</p> */}
            <p>© {new Date().getFullYear()} Fast Pizza Delivery</p>
        </footer>
    );
}

export default Footer;