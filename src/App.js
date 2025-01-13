import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pizzamenu from "./Pizzamenu";
import OrderProcessing from "./OrderProcessing";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Custom404 from "./Custom404";
import { ErrorComponent, FallbackComponent } from "./ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
    <Route path="/" element={
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Pizzamenu />
      </ErrorBoundary>
      } />
    <Route path="/process-order" element={
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <OrderProcessing />
      </ErrorBoundary>
      } />
    <Route path="/menu" element={
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Menu />
      </ErrorBoundary>
      } />
    <Route path="/about" element={
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <About />
      </ErrorBoundary>
      } />
    <Route path="/contact" element={
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Contact />
      </ErrorBoundary>
      } />
    <Route path="*" element={
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Custom404 />
      </ErrorBoundary>
      } />
      <Route path="/error" element={<ErrorComponent />} />
  </Routes>   
    
      <Footer />
    </Router>
  );
}

export default App;
    

    
    
    
  

