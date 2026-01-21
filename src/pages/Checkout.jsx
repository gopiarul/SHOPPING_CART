import React from "react";

function Checkout({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold mb-4">Checkout</h2>

      <div className="row">
        {/* 🔹 BILLING */}
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Billing Details</h5>

          <input className="form-control mb-2" placeholder="Full Name" />
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-2" placeholder="Phone Number" />
          <textarea
            className="form-control mb-2"
            placeholder="Delivery Address"
            rows="3"
          ></textarea>

          <button className="btn btn-success w-100 mt-2">
            Place Order
          </button>
        </div>

        {/* 🔹 ORDER SUMMARY */}
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Order Summary</h5>

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between border-bottom py-2"
            >
              <span>{item.title}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <h5 className="text-end mt-3">
            Total: <span className="text-danger">₹{total}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
