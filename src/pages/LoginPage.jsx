import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
          <Link to={"/RegisterPage>CREATE ACCOUNT"}></Link>
        </button>
      </form>
    </div>
  );
};
