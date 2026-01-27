import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ email });
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="col-md-4 mx-auto card p-4 shadow">
        <h4 className="fw-bold text-center mb-3">Login</h4>

        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <button className="btn btn-danger w-100">Login</button>
        </form>

        <p className="text-center mt-3">
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
