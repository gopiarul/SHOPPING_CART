import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./components/Categories";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth";
import About from "./pages/About";
import CustomerSupport from "./pages/CustomerSupport";

import { getCart, saveCart } from "./utils/cartStorage";

import UserLayout from "./layout/UserLayout";

// ADMIN
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminUsers from "./admin/pages/AdminUsers";
import AdminLayout from "./admin/layout/AdminLayout";
import AdminRoute from "./admin/components/AdminRoute";

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setCartItems(getCart(storedUser));
  }, []);

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
      <Routes>

        {/* ================= USER ROUTES ================= */}
        <Route
          path="/"
          element={
            <UserLayout
              user={user}
              cartItems={cartItems}
              setUser={setUser}
              setCartItems={setCartItems}
            >
              <Home />
            </UserLayout>
          }
        />

        <Route
          path="/categories"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <Categories addToCart={addToCart} />
            </UserLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <ProductDetails addToCart={addToCart} />
            </UserLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </UserLayout>
          }
        />

        <Route
          path="/checkout"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <Checkout cartItems={cartItems} setOrders={setOrders} setCartItems={setCartItems} />
            </UserLayout>
          }
        />

        <Route
          path="/orders"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <Orders orders={orders} />
            </UserLayout>
          }
        />
        <Route path="/Order-success" element={<OrderSuccess/>}/>  

        <Route path="/login" element={<Auth setUser={setUser} setCartItems={setCartItems} />} />

        <Route
          path="/about"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <About />
            </UserLayout>
          }
        />

        <Route
          path="/support"
          element={
            <UserLayout user={user} cartItems={cartItems} setUser={setUser} setCartItems={setCartItems}>
              <CustomerSupport />
            </UserLayout>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminLayout>
                <AdminProducts />
              </AdminLayout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminLayout>
                <AdminUsers />
              </AdminLayout>
            </AdminRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
