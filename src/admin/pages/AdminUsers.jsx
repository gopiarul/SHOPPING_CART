import React from "react";

import "../components/AdminProducts.css";

function AdminUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="admin-users">
      <h3 className="page-title">Users</h3>

      {users.length === 0 && (
        <p className="empty-text">No users found</p>
      )}

      {users.map((u, i) => (
        <div className="user-card" key={i}>
          {/* Header */}
          <div className="user-header">
            <img
              src={`https://ui-avatars.com/api/?name=${u.username}&background=0D9488&color=fff`}
              alt="avatar"
            />
            <div>
              <h5>{u.username}</h5>
              <p>{u.email || "user@email.com"}</p>
              <span className="role">Customer</span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="user-info">
            <div>
              <label>Total Cart Items</label>
              <span>{u.cart?.length || 0}</span>
            </div>

            <div>
              <label>Last Order</label>
              <span>{u.lastOrder || "N/A"}</span>
            </div>

            <div>
              <label>Account Status</label>
              <span className="active">Active</span>
            </div>
          </div>

          {/* Address */}
          <div className="user-address">
            <h6>Address</h6>
            <p>{u.address || "Not provided"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminUsers;
