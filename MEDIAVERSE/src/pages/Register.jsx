import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // сохранить в localStorage
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registered successfully!");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <main className="auth-content">
        <div className="auth-container">
          <h1>Sign Up</h1>
          <form className="auth-form" onSubmit={handleRegister}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="auth-button">
              Register
            </button>
          </form>

          <div className="auth-footer">
            Already have an account? <a href="/auth">Sign In</a>
          </div>
        </div>
      </main>
    </div>
  );
}
