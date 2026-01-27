import React from "react";
import { Link } from "react-router-dom";
import thankyouImg from "../assets/order-success.jpg"; 
// put your image inside src/assets/

function OrderSuccess() {
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6db3f2, #1e69de)",
      }}
    >
      <div className="row bg-white rounded-4 shadow-lg overflow-hidden w-75">

        {/* LEFT – IMAGE & THANK YOU */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5 text-center">
          <h1 className="fw-bold display-4 mb-3">THANK YOU!</h1>
          <img
            src={thankyouImg}
            alt="Order Success"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* RIGHT – ORDER DETAILS */}
        <div className="col-md-6 p-5">
          <h3 className="fw-bold mb-3">ORDER CONFIRMED</h3>

          <p className="text-muted">
            Hello <strong>Customer</strong>, <br />
            Your order has been confirmed and will be sent to your email address
            within 15 minutes.
          </p>

          <hr />

          <p className="mb-2">
            <strong>Order Number:</strong>{" "}
            <span className="text-danger fw-bold">{orderId}</span>
          </p>

          <div className="mt-4">
            <div className="d-flex justify-content-between mb-2">
              <span>Gift Items</span>
              <span>₹499</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span>₹0</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total Amount</span>
              <span className="text-primary">₹499</span>
            </div>
          </div>

          <div className="mt-4 d-flex gap-3">
            <Link to="/" className="btn btn-outline-secondary w-50">
              Go Home
            </Link>

            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-50"
            >
              Check E-Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
