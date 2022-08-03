import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import React from "react";
import Shopping from './page/Shopping';
import DescriptionProduct from './page/DescriptionProduct';
import Contact from './page/Contact';
import Blog from './page/Blog';
import About from './page/About';
import Cart from './page/Cart';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/descr_product" element={<DescriptionProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
