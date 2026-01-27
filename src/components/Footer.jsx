import React from "react";

function Footer() {
  return (
    <footer className="bg-danger text-white pt-5 mt-5">
      <div className="container">

        {/* TOP FOOTER */}
        <div className="row">

          {/* BRAND + SUPPORT */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">🎁 GiftShop</h4>
            <p className="mt-3">
              Need Help?
            </p>
            <p className="small">
              Visit our customer support <br />
              or call us at
            </p>
            <h6 className="fw-bold">📞 123-456-7890</h6>

            <div className="d-flex gap-3 mt-3 fs-5">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

          {/* MENU */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Menu</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">Deals</li>
              <li className="mb-2">Food</li>
              <li className="mb-2">Beverages</li>
              <li className="mb-2">Household</li>
              <li className="mb-2">Personal Care</li>
              <li className="mb-2">My Orders</li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">Birthday Gifts</li>
              <li className="mb-2">Anniversary Gifts</li>
              <li className="mb-2">Wedding Gifts</li>
              <li className="mb-2">Soft Toys</li>
              <li className="mb-2">Gift Hampers</li>
              <li className="mb-2">Custom Gifts</li>
            </ul>
          </div>

          {/* INFO */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Info</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">FAQ</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Customer Support</li>
              <li className="mb-2">Store Locations</li>
              <li className="mb-2">Terms & Conditions</li>
            </ul>
          </div>

        </div>

        <hr className="border-light opacity-50" />

        {/* PAYMENT SECTION */}
        <div className="text-center mb-4">
          <p className="fw-semibold mb-3">
            We accept the following payment methods
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <img src="https://img.icons8.com/color/48/visa.png" alt="visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="amex" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="paypal" />
            <img src="https://img.icons8.com/color/48/discover.png" alt="discover" />
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center border-top border-light pt-3 pb-3 small">
          © 2026 GiftShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
