import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems, setOrders, setCartItems }) {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [agreed, setAgreed] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + shipping - discount;

  const applyCoupon = () => {
    if (coupon === "OFF10") {
      setDiscount(10);
      alert("Coupon Applied!");
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const placeOrder = () => {
    if (!agreed) {
      alert("Please accept terms & conditions");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const newOrder = {
      id: "ORD-" + Date.now(),
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total,
    };

    setOrders((prev) => [...prev, newOrder]);
    setCartItems([]);

    navigate("/order-success", { state: newOrder });
  };

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4">🧾 Checkout</h3>

      <div className="row g-4">
        {/* LEFT SIDE */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0 p-4 mb-4">
            <h5 className="fw-bold mb-3">Shipping Information</h5>

            <input className="form-control mb-3" placeholder="Full Name" />
            <input className="form-control mb-3" placeholder="Phone Number" />
            <textarea
              className="form-control"
              rows="2"
              placeholder="Shipping Address"
            ></textarea>
          </div>

          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-3">Promo Coupon</h5>

            <div className="d-flex gap-2">
              <input
                className="form-control"
                placeholder="OFF10"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn btn-outline-primary" onClick={applyCoupon}>
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-5">
          <div className="card shadow border-0 p-4 sticky-top">
            <h5 className="fw-bold mb-3">Order Summary</h5>

            {cartItems.map((item) => (
              <div key={item._id} className="d-flex mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "10px",
                  }}
                />
                <div className="flex-grow-1">
                  <p className="mb-0 fw-semibold">{item.name}</p>
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
              <input
                className="form-check-input"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <label className="form-check-label">
                I agree to the terms & conditions
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