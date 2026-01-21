import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ PASS addToCart HERE */}
        <Route
          path="/categories"
          element={<Categories addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
