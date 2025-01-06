import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pizzamenu from "./Pizzamenu";
import OrderProcessing from "./OrderProcessing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pizzamenu />} />
        <Route path="/process-order" element={<OrderProcessing />} />
      </Routes>
    </Router>
  );
}

export default App;
