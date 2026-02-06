import React from "react";

function AdminOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container mt-4">
      <h4 className="fw-bold mb-3">Orders Management</h4>

      {orders.length === 0 ? (
        <p className="text-muted">No orders found</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Total Items</th>
              <th>Total Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o, i) => (
              <tr key={i}>
                <td>{o.username}</td>
                <td>{o.items.length}</td>
                <td>₹{o.total}</td>
                <td>{new Date(o.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminOrders;
