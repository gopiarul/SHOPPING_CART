import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems, setOrders, setCartItems }) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const delivery = subtotal > 1000 ? 0 : 99;
  const total = subtotal + delivery;

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
      <h2 className="fw-bold mb-4">🧾 Checkout</h2>

      <div className="row">
        <div className="col-md-7">
          <input className="form-control mb-3" placeholder="Full Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea
            className="form-control mb-3"
            placeholder="Address"
          ></textarea>

          <button
            className="btn btn-danger w-100"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>

        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h5>Order Summary</h5>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between"
                >
                  <span>{item.title} × {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}

              <hr />
              <p>Subtotal: ₹{subtotal}</p>
              <p>Delivery: {delivery === 0 ? "Free" : `₹${delivery}`}</p>
              <h5 className="text-danger">Total: ₹{total}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
