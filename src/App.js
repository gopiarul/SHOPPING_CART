import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null); // ✅ AUTH STATE

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      return exist
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
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
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/categories"
          element={<Categories addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/cart"
          element={
            user ? (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout
                cartItems={cartItems}
                setOrders={setOrders}
                setCartItems={setCartItems}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/orders"
          element={user ? <Orders orders={orders} /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
