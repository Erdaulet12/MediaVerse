import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = form;

    if (!email || !password || (!isLogin && !confirmPassword)) {
      setMessage("Please fill all fields");
      return;
    }

    if (!isLogin) {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }

      const exists = users.find((user) => user.email === email);
      if (exists) {
        setMessage("User already exists");
        return;
      }

      const newUsers = [...users, { email, password }];
      setUsers(newUsers);
      localStorage.setItem("users", JSON.stringify(newUsers));
      setMessage("Account created! You can log in now");
      setIsLogin(true);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setMessage("Login successful!");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? "Log in" : "Create account"}</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{isLogin ? "Log in" : "Register"}</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
      <div className="auth-links">
        {isLogin ? (
          <>
            <a href="#">Forgot password?</a>
            <span>|</span>
            <button type="button" onClick={() => setIsLogin(false)}>
              Create account
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => setIsLogin(true)}>
              Already have an account?
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
