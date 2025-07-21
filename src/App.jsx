import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Pages/Navigation.jsx";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Account from "./Pages/Account.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
