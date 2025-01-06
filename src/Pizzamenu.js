import React from "react";
import "./Pizzamenu.css";
import Header from "./Header";
import Footer from "./Footer";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
      image: "starter/pizzas/focaccia.jpg",
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
        soldOut: false,
      image: "starter/pizzas/margherita.jpg",
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
        soldOut: false,
        image: "starter/pizzas/spinaci.jpg",
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
        soldOut: false,
        image: "starter/pizzas/funghi.jpg",
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
        soldOut: true,
        image: "starter/pizzas/salamino.jpg",
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
        image: "starter/pizzas/prosciutto.jpg",
    },
  ];
  

function Pizzamenu() {
    return (
        <div>
            <Header />
            <h1>Pizza Menu</h1>
            <p className="p1">Authentic Italian pizza. 6 different pizzas to choose from.</p>
      <ul>
        {pizzaData.map((pizza, index) => (
          <li
            key={index}
            className={pizza.soldOut ? "sold-out" : ""}
            style={{ animationDelay: `${index * 1.2}s` }}
          >
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <p>Price: {pizza.price}€</p>
            {pizza.soldOut && <p>Sold out</p>}
          </li>
        ))}
            </ul>
            <Footer />
    </div>
    );
}

export default Pizzamenu;
  