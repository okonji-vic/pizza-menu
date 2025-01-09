import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-text">
                    Welcome to <span className="highlight">Pizzalleria</span>! We are a family-owned pizzeria that has been serving delicious pizzas since 1990. Our pizzas are made with fresh ingredients and baked to perfection in our wood-fired oven. We offer a wide variety of pizzas to suit every taste, from classic margherita to spicy pepperoni. Whether you dine in, take out, or order delivery, we guarantee that you will love our pizzas.
                </p>
                <p className="about-text">Come visit us today and experience the best pizza in town!</p>
                <Link to="/">
                    <button className="about-button">Go Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default About;



