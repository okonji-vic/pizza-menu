import React from "react";
import "./Filter.css";

function Filter({ filter, setFilter }) {
  const filters = [
    { id: "all", label: "All" },
    { id: "available", label: "Available" },
    { id: "unavailable", label: "Unavailable" },
    { id: "cheap", label: "Cheap (<12€)" },
    { id: "expensive", label: "Expensive (≥12€)" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "meaty", label: "Meaty" },
    { id: "fishy", label: "Fishy" },
    { id: "spicy", label: "Spicy" },
    { id: "vegan", label: "Vegan" },
    { id: "gluten-free", label: "Gluten-Free" },
    { id: "lactose-free", label: "Lactose-Free" },
    { id: "nut-free", label: "Nut-Free" },
    { id: "egg-free", label: "Egg-Free" },
  ];

  return (
    <div className="filter-container">
      {filters.map((filterItem) => (
        <button
          key={filterItem.id}
          className={`filter-button ${filter === filterItem.id ? "active" : ""}`}
          onClick={() => setFilter(filterItem.id)}
        >
          {filterItem.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
