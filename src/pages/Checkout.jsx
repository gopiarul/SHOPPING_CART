import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems, setOrders, setCartItems }) {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + shipping - discount;

  const applyCoupon = () => {
    if (coupon === "OFF10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const placeOrder = () => {
    setOrders((prev) => [
      ...prev,
      {
        id: "ORD-" + Date.now(),
        date: new Date().toLocaleDateString(),
        items: cartItems,
        total,
      },
    ]);

    setCartItems([]);
    navigate("/order-success");
  };

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4">🧾 Checkout</h3>

      <div className="row g-4">
        {/* LEFT – SHIPPING + PAYMENT */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0 p-4 mb-4">
            <h5 className="fw-bold mb-3">Shipping Information</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input className="form-control" placeholder="John Doe" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input className="form-control" placeholder="+91 9876543210" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                rows="2"
                placeholder="Street, City, State, Pincode"
              ></textarea>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-3">Payment Methods</h5>

            <div className="d-flex gap-3 mb-4">
              <button className="btn btn-outline-secondary btn-sm">
                Cash on Delivery
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                PayPal
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                GPay
              </button>
            </div>

            <h6 className="fw-bold mb-2">Card Information</h6>

            <div className="mb-3">
              <label className="form-label">Cardholder Name</label>
              <input className="form-control" placeholder="John Doe" />
            </div>

            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                className="form-control"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Expiry Date</label>
                <input className="form-control" placeholder="MM / YY" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">CVV</label>
                <input className="form-control" placeholder="123" />
              </div>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                Save card for future purchases
              </label>
            </div>

            <h6 className="fw-bold">Promo Coupon</h6>
            <div className="d-flex gap-2">
              <input
                className="form-control"
                placeholder="OFF10"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="col-md-5">
          <div
            className="card shadow border-0 p-4 sticky-top"
            style={{ top: "100px" }}
          >
            <h5 className="fw-bold mb-3">Order Details</h5>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center mb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "10px",
                  }}
                />
                <div className="flex-grow-1">
                  <p className="mb-0 fw-semibold">{item.title}</p>
                  <small className="text-muted">
                    ₹{item.price} × {item.qty}
                  </small>
                </div>
                <strong>₹{item.price * item.qty}</strong>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>

            {discount > 0 && (
              <div className="d-flex justify-content-between text-success">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span className="text-primary">₹{total}</span>
            </div>

            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                I agree to the terms and conditions
              </label>
            </div>

            <button
              className="btn btn-primary w-100 mt-4"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
