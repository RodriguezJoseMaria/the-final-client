import { useState } from "react";
import authService from "../api/auth.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Container from "../components/Container.jsx";
import AuthContainer from "../components/AuthContainer.jsx";

import "./RegisterPage.css";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    authService
      .signup(formData)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
    setFormData({
      email: "",
      password: "",
      name: "",
    });
  };

  return (
    <AuthContainer>
      <div className="register-container">
        {/* <div className="image-container">
          <img src={registerImage} alt="Register Image" />
        </div> */}
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>PERSONAL DETAILS</h2>
            <div className="form-group">
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your e-mail address"
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
                placeholder="Enter a secure password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor=" name"> Name</label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <button className="register-button">
              <Link to="/login">CREATE ACCOUNT </Link>
            </button>
          </form>
        </div>
      </div>
    </AuthContainer>
  );
};
