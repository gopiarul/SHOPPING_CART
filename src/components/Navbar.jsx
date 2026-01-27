import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchModal from "../pages/SearchModal";


function Navbar({ cartCount, user, setUser }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* 🔹 TOP INFO BAR */}
      <div className="bg-dark text-white small py-1">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex gap-3">
            <span>About Us</span>
            <span>Customer Support</span>
          </div>
          <div>
            Shop on the go, download our app.{" "}
            <span className="fw-bold">Details</span>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <nav className="navbar navbar-dark bg-danger py-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* LOGO */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            Clovers<span className="fw-normal">.</span>
          </Link>

          {/* SEARCH ICON */}
          <div className="d-none d-lg-block">
            <i
              className="bi bi-search fs-4 text-white cursor-pointer"
              onClick={() => setShowSearch(true)}
            >Search</i>
          </div>

          {/* RIGHT ICONS */}
          <div className="d-flex align-items-center gap-4 text-white">

            <i className="bi bi-geo-alt fs-5"></i>
            <i className="bi bi-heart fs-5"></i>

            {/* CART */}
            <Link to="/cart" className="position-relative text-white">
              <i className="bi bi-cart fs-5"></i>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>

            {/* AUTH */}
            {!user ? (
              <Link to="/login" className="btn btn-light btn-sm">
                Login
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-light btn-sm dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {user.name || "Account"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/orders">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setUser(null)}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 🔹 MENU BAR (PAGES BUTTONS) */}
      <div className="bg-danger border-top border-light">
        <div className="container-fluid">
          <ul className="nav justify-content-center py-2 gap-4">

            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold" to="/categories">
                Categories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-semibold"
                to="/categories?type=Birthday"
              >
                Birthday Gifts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-semibold"
                to="/categories?type=Anniversary"
              >
                Anniversary
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white fw-semibold" to="/orders">
                My Orders
              </NavLink>
            </li>

          </ul>
        </div>
      </div>

      {/* 🔍 SEARCH MODAL */}
      <SearchModal show={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}

export default Navbar;
