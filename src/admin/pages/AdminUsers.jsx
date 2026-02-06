import React, { useState } from "react";

function AdminUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container mt-4">
      <h4>Shopping Cart Users</h4>

      <table className="table table-striped align-middle">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Total Items</th>
            <th>View Cart</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No users found
              </td>
            </tr>
          )}

          {users.map((u, i) => (
            <tr key={i}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src={
                    u.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="user"
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }}
                />
                <span>{u.username}</span>
              </td>
              <td>{u.email}</td>
              <td>{u.cart?.length || 0}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => setSelectedUser(u)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CART MODAL */}
      {selectedUser && (
        <div className="modal fade show d-block bg-dark bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <h5>{selectedUser.username} Cart</h5>

              {selectedUser.cart?.length ? (
                selectedUser.cart.map((item, i) => (
                  <p key={i}>
                    {item.name} × {item.qty}
                  </p>
                ))
              ) : (
                <p className="text-muted">No items in cart</p>
              )}

              <button
                className="btn btn-secondary mt-2"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminUsers;
