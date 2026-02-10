import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchModal from "../pages/SearchModal";
import { getCart } from "../utils/cartStorage";
import AdminLogin from "../admin/pages/AdminLogin";

function Navbar({ cartCount, user, setUser, setCartItems }) {
  const [showSearch, setShowSearch] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setCartItems(getCart(null)); // switch to guest cart
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-dark text-white small py-1">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex gap-3">
            <NavLink className="nav-link text-white" to="/about">About</NavLink>
    <NavLink className="nav-link text-white" to="/support">
  Customer Support
</NavLink>

          </div>
          <div>
            Shop on the go, download our app. <b>Details</b>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-danger py-3">
        <div className="container-fluid d-flex justify-content-between">

          <Link className="navbar-brand fw-bold fs-3" to="/">
            GiftShop<span className="fw-normal">.</span>
          </Link>

          <i
            className="bi bi-search fs-4 text-white d-none d-lg-block"
            onClick={() => setShowSearch(true)}
          >
            Search
          </i>

          <div className="d-flex align-items-center gap-4 text-white">
            <Link to="/cart" className="position-relative text-white">
              <i className="bi bi-cart fs-5"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <Link to="/admin/login/" className="btn btn-light">admin</Link>

            {!user ? (
              <Link to="/login" className="btn btn-light btn-sm">
                <i class="bi bi-person-square"></i>
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-light btn-sm dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {user.username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/orders">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item " onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* MENU */}
      <div className="bg-danger border-top">
        <ul className="nav justify-content-center py-2 gap-4">
          <NavLink className="nav-link text-white" to="/">Home</NavLink>
          <NavLink className="nav-link text-white" to="/categories">Categories</NavLink>
          <NavLink className="nav-link text-white" to="/orders">My Orders</NavLink>
          <NavLink className="nav-link text-white" to="/cart">Cart</NavLink>
        </ul>
      </div>

      <SearchModal show={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}

export default Navbar;
