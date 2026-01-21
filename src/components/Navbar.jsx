import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top shadow">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🎁 GiftShop
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* CENTER LINKS */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/categories">
                Categories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/categories?type=Birthday">
                Birthday Gifts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/categories?type=Anniversary">
                Anniversary
              </NavLink>
            </li>
          </ul>

          {/* SEARCH + CART */}
          <div className="d-flex align-items-center gap-3">

            {/* SEARCH */}
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search gifts..."
              style={{ width: "220px" }}
            />

            {/* CART */}
            <Link to="/cart" className="btn btn-light position-relative">
              🛒 Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
