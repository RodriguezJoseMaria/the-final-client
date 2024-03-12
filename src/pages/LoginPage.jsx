import { useState } from "react";
import authService from "../api/auth.js";
import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context.jsx";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { storeToken, authenticateUser } = useAuth();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authService
      .login(formData)
      .then((res) => {
        // console.log("login", res);
        storeToken(res.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <h2>LOG IN TO YOUR ACCOUNT</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your e-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="login-button">LOG IN</button>

        <hr />

        <h3>NEED AN ACCOUNT?</h3>
        <button className="register-button">
          <Link to="/register">CREATE ACCOUNT </Link>
        </button>
      </form>
    </div>
  );
};
