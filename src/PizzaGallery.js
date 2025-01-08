import React, { useState, useEffect } from "react";
import "./PizzaGallery.css";

const pizzaImages = [
  { src: "starter/pizzas/focaccia.jpg", alt: "Pizza Focaccia" },
  { src: "starter/pizzas/funghi.jpg", alt: "Pizza Funghi" },
  { src: "starter/pizzas/margherita.jpg", alt: "Pizza Margherita" },
  { src: "starter/pizzas/prosciutto.jpg", alt: "Pizza Prosciutto" },
  { src: "starter/pizzas/salamino.jpg", alt: "Pizza Salamino" },
  { src: "starter/pizzas/spinaci.jpg", alt: "Pizza Spinaci" },
];

function PizzaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pizzaImages.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isPaused]);

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((currentIndex + 1) % pizzaImages.length);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((currentIndex - 1 + pizzaImages.length) % pizzaImages.length);
  };

  const handleBulletClick = (index) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  return (
    <div className="pizza-gallery">
      <h1 className="h1">Pizzallery</h1>
      <p>Check out our pizzas!</p>
      <div className="image-container">
        <img
          src={pizzaImages[currentIndex].src}
          alt={pizzaImages[currentIndex].alt}
          className="gallery-image"
        />
        <button className="prev-button" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="next-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="bullet-list">
        {pizzaImages.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleBulletClick(index)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
}

export default PizzaGallery;
