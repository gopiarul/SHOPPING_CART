import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container my-5 text-center">
      <div className="card shadow border-0 p-5">
        <h1 className="text-success mb-3">✅ Order Placed Successfully!</h1>

        <p className="fs-5">
          Thank you for shopping with <strong>GiftShop</strong>
        </p>

        <p className="text-muted">
          Your order will be delivered within <strong>3–5 business days</strong>.
        </p>

        <div className="my-4">
          <h6 className="text-muted">Order ID</h6>
          <h5 className="fw-bold">GS-{Math.floor(Math.random() * 1000000)}</h5>
        </div>

        <Link to="/categories" className="btn btn-danger px-4">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
