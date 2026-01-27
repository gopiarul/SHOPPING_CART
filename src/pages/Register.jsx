import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container my-5">
      <div className="col-md-4 mx-auto card p-4 shadow">
        <h4 className="fw-bold text-center mb-3">Register</h4>

        <form onSubmit={handleRegister}>
          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <button className="btn btn-danger w-100">Create Account</button>
        </form>

        <p className="text-center mt-3">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
