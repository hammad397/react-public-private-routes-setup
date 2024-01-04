import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("isAuthenticated", true);
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
