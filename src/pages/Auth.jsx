import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../utils/cartStorage";

function Auth({ setUser, setCartItems }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timer, setTimer] = useState(30);

  const sendOtp = () => {
    if (!username) return alert("Enter email or phone");
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setStep(2);
    setTimer(30);
    alert(`OTP: ${code}`); // demo
  };

  // OTP timer
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [timer, step]);

  const verifyOtp = () => {
    if (otp !== generatedOtp) return alert("Invalid OTP");

    const user = { username };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);

    // Load user-specific cart only
    setCartItems(getCart(user));

    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="col-md-4 mx-auto card p-4 shadow">
        <h4 className="fw-bold text-center mb-3">
          {step === 1 ? "Login / Register" : "Verify OTP"}
        </h4>

        {step === 1 && (
          <>
            <input
              className="form-control mb-3"
              placeholder="Email or Phone"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="btn btn-danger w-100" onClick={sendOtp}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              className="form-control mb-3"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button className="btn btn-success w-100 mb-2" onClick={verifyOtp}>
              Verify & Login
            </button>

            <button
              className="btn btn-link w-100"
              disabled={timer > 0}
              onClick={sendOtp}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
