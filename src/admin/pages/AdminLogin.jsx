import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../utils/adminAuth";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = adminLogin(email, password);
    success ? navigate("/admin/dashboard") : alert("Invalid credentials");
  };

  return (
    <div className="container mt-5">
      <div className="card col-md-4 mx-auto p-4 shadow">
        <h4 className="text-center fw-bold mb-3">Admin Login</h4>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-danger w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
