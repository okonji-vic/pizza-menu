import React from "react";
import "./Pizzamenu.css";
import Filter from "./Filter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PizzaGallery from "./PizzaGallery";

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
    const [filter, setFilter] = React.useState("all");
    const [selectedPizzas, setSelectedPizzas] = useState([]);
  const navigate = useNavigate();

  const handlePizzaSelection = (pizza) => {
    if (selectedPizzas.includes(pizza)) {
      setSelectedPizzas(selectedPizzas.filter((p) => p !== pizza));
    } else {
      setSelectedPizzas([...selectedPizzas, pizza]);
    }
  };

  const handleOrderNow = () => {
    if (selectedPizzas.length === 0) {
      alert("Please select at least one pizza to proceed.");
      return;
    }
    navigate("/process-order", { state: { selectedPizzas } });
  };


    const filteredPizzas = pizzaData.filter((pizza) => {
        if (filter === "all") {
            return pizzaData;
        } else if (filter === "available") {
            return !pizza.soldOut;
        } else if (filter === "unavailable") {
            return pizza.soldOut;
        } else if (filter === "cheap") {
            return pizza.price < 12;
        } else if (filter === "expensive") {
            return pizza.price >= 12;
        } else if (filter === "vegetarian") {
            return pizza.ingredients.includes("mushrooms") || pizza.ingredients.includes("spinach");
        } else if (filter === "meaty") {
            return pizza.ingredients.includes("pepperoni") || pizza.ingredients.includes("ham");
        } else if (filter === "fishy") {
            return pizza.ingredients.includes("anchovies");
        } else if (filter === "spicy") {
            return pizza.ingredients.includes("jalapeno");
        } else if (filter === "vegan") {
            return !pizza.ingredients.includes("mozarella") && !pizza.ingredients.includes("ham") && !pizza.ingredients.includes("pepperoni") && !pizza.ingredients.includes("burrata");
        } else if (filter === "gluten-free") {
            return !pizza.ingredients.includes("bread");
        } else if (filter === "lactose-free") {
            return !pizza.ingredients.includes("mozarella") && !pizza.ingredients.includes("ricotta") && !pizza.ingredients.includes("burrata");
        } else if (filter === "nut-free") {
            return !pizza.ingredients.includes("walnuts");
        } else if (filter === "egg-free") {
            return !pizza.ingredients.includes("eggs");
        }
        return pizzaData;

    }
    );
    return (
        <div>
            
            <PizzaGallery />
            
            <h1 className="h1">Pizza Menu</h1>
            <p className="p1">Authentic Italian pizza. 6 different pizzas to choose from.</p>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className="pizza-list">
                
        {filteredPizzas.map((pizza, index) => (
          <li
            key={index}
            className={`pizza-item ${pizza.soldOut ? "sold-out" : ""} ${
                selectedPizzas.includes(pizza) ? "selected" : ""
              }`}
            style={{ animationDelay: `${index * 1.2}s` }}
            onClick={() => !pizza.soldOut && handlePizzaSelection(pizza)}
          >
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <p>Price: {pizza.price}€</p>
            {pizza.soldOut && <p>Sold out</p>}
          </li>
        ))}
            </ul>
            <button className="order-button" onClick={handleOrderNow}>
        Order Now
      </button>     
    </div>
    );
}

export default Pizzamenu;
  