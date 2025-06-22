import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.email === email && storedUser?.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="auth-page">
      <main className="auth-content">
        <div className="auth-container">
          <h1>Sign In</h1>
          <form className="auth-form" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="auth-button">
              Login
            </button>
          </form>

          <div className="auth-footer">
            Don’t have an account? <a href="/register">Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  );
}
