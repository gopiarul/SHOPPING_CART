import React from "react";

function Orders({ orders }) {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">📦 My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-muted">No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card mb-3 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Order ID: <strong>{order.id}</strong></h6>
                <span className="text-muted">{order.date}</span>
              </div>

              <hr />

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>
                    {item.title} × {item.qty}
                  </span>
                  <strong>₹{item.price * item.qty}</strong>
                </div>
              ))}

              <hr />

              <div className="text-end fw-bold text-danger">
                Total: ₹{order.total}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
