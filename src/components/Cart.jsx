import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cartItems }) {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between border-bottom py-2"
            >
              <div>
                <h6>{item.title}</h6>
                <small>Qty: {item.qty}</small>
              </div>
              <p className="fw-bold">₹{item.price * item.qty}</p>
            </div>
          ))}

          {/* TOTAL */}
          <div className="d-flex justify-content-between mt-4">
            <h5>Total</h5>
            <h5 className="text-danger fw-bold">₹{total}</h5>
          </div>

          {/* BUTTONS */}
          <div className="mt-4 d-flex gap-3">
            <Link to="/categories" className="btn btn-outline-secondary">
              Continue Shopping
            </Link>

            <button
              className="btn btn-danger px-4"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
