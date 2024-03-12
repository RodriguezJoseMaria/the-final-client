import { useState } from "react";
import authService from "../api/auth.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context.jsx";
import LoginContainer from "../components/LoginContainer.jsx";

import "./LoginPage.css";

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
    <LoginContainer>
      <div className="login-container">
        <div className="form-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>LOG IN TO YOUR ACCOUNT</h2>
            <div className="form-group">
              <label htmlFor="email"> E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="login-button">LOG IN</button>
            <h3>NEED AN ACCOUNT?</h3>
            <button
              className="register-button"
              style={{ textDecoration: "none" }}
            >
              <Link to="/register" style={{ color: "black" }}>
                CREATE ACCOUNT{" "}
              </Link>
            </button>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};
