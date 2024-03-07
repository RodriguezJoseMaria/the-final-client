import { useState } from "react";
import authService from "../api/auth.js";
import { useNavigate } from "react-router-dom";
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
        // console.log(res.data);
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
    <div className="register">
      <h2>PERSONAL DETAILS</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your e-mail address"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter a secure password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor=" name"> Name</label>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <button className="register-button">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};
