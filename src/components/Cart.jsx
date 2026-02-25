import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const updateQty = (_id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === _id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (_id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== _id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4">🛒 Shopping Cart</h3>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your cart is empty</h5>
          <Link to="/categories" className="btn btn-danger mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div key={item._id} className="card mb-3 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <div>
                      <h6>{item.name}</h6>
                      <small>₹{item.price}</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateQty(item._id, "dec")}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateQty(item._id, "inc")}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-end">
                    <h6>₹{item.price * item.qty}</h6>
                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={() => removeItem(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h5 className="fw-bold">Total: ₹{total}</h5>
              <button
                className="btn btn-danger w-100 mt-3"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;