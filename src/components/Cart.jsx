import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h5>Your cart is empty</h5>
          <Link to="/categories" className="btn btn-danger mt-3">
            Shop Gifts
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center">

                <div>
                  <h6>{item.title}</h6>
                  <p className="mb-1">₹{item.price}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQty(item.id, "dec")}
                    >−</button>

                    <span>{item.qty}</span>

                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQty(item.id, "inc")}
                    >+</button>
                  </div>
                </div>

                <div className="text-end">
                  <p className="fw-bold">
                    ₹{item.price * item.qty}
                  </p>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          ))}

          <h4 className="text-end text-danger fw-bold">
            Total: ₹{total}
          </h4>

          <button
            className="btn btn-danger w-100 mt-3"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
