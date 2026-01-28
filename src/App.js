import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth";
import About from "./pages/About";
import { getCart, saveCart } from "./utils/cartStorage";
import CustomerSupport from "./pages/CustomerSupport";

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  // Load user & correct cart on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setCartItems(getCart(storedUser));
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    saveCart(user, cartItems);
  }, [cartItems, user]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      return exist
        ? prev.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <Router>
      <Navbar
        cartCount={cartItems.length}
        user={user}
        setUser={setUser}
        setCartItems={setCartItems}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setOrders={setOrders} setCartItems={setCartItems} />} />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Auth setUser={setUser} setCartItems={setCartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<CustomerSupport />} />
        

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
