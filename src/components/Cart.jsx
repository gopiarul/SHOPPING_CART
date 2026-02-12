import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // ✅ UPDATE QTY
  const updateQty = (_id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === _id
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

  // ✅ REMOVE ITEM
  const removeItem = (_id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== _id)
    );
  };

  // ✅ TOTAL
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
          {/* LEFT SIDE */}
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="card mb-3 border-0 shadow-sm"
              >
                <div className="card-body">
                  <div className="row align-items-center">

                    {/* IMAGE */}
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                          height: "80px",
                          width: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="col-md-4">
                      <small className="text-muted">Gift Item</small>
                      <h6 className="fw-semibold mb-1">
                        {item.name}
                      </h6>
                      <small className="text-muted">
                        ₹{item.price}
                      </small>
                    </div>

                    {/* QTY */}
                    <div className="col-md-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            updateQty(item._id, "dec")
                          }
                        >
                          −
                        </button>

                        <span className="fw-bold">
                          {item.qty}
                        </span>

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            updateQty(item._id, "inc")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* PRICE + REMOVE */}
                    <div className="col-md-3 text-end">
                      <h6 className="fw-bold mb-2">
                        ₹{item.price * item.qty}
                      </h6>
                      <button
                        className="btn btn-link text-danger p-0"
                        onClick={() =>
                          removeItem(item._id)
                        }
                      >
                        Remove
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT – SUMMARY */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: "100px" }}>
              <div className="card-body">
                <h5 className="fw-bold mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery</span>
                  <span className="text-success">Free</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span className="text-danger">₹{total}</span>
                </div>

                <button
                  className="btn btn-danger w-100 mt-4"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/categories"
                  className="btn btn-outline-secondary w-100 mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;
