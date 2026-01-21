import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4">
      <div className="container">
        <div className="row">

          {/* 🔹 BRAND */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🎁 Impressive Gift</h5>
            <p>
              Making every occasion special with beautiful gifts.
            </p>
          </div>

          {/* 🔹 LINKS */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Categories</li>
              <li>Cart</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* 🔹 SOCIAL + NEWSLETTER */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="mb-3">
              <i className="bi bi-facebook me-3 fs-5"></i>
              <i className="bi bi-instagram me-3 fs-5"></i>
              <i className="bi bi-twitter fs-5"></i>
            </div>

            <h6>Subscribe</h6>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Enter email"
            />
            <button className="btn btn-danger btn-sm w-100">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center mb-0 pb-3">
          © 2026 Gift Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
