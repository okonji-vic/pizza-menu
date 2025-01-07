import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pizzamenu from "./Pizzamenu";
import OrderProcessing from "./OrderProcessing";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pizzamenu />} />
        <Route path="/process-order" element={<OrderProcessing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
