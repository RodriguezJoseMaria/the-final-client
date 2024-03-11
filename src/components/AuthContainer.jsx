import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/Logo/Y-3-Logo.png";
import { useAuth } from "../context/auth.context";
import registerImage from "../../public/images/Register/register.jpg";
import "./AuthContainer.css";

function AuthContainer({ children }) {
  const { isLoggedIn, user, logoutUser, isLoading } = useAuth();
  /* console.log(user, isLoggedIn, isLoading); */

  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  const [hovered, setHovered] = useState(false);
  console.log(hovered);

  const handleOptionClick = (option) => {
    setSelectedOption(null);
    setTimeout(() => {
      setSelectedOption(option);
    }, 200);
  };

  return (
    <section
      className="layout"
      style={{
        backgroundImage: `url(${registerImage})`,
        backgroundSize: "cover",
        width: "50%",
      }}
    >
      <div>
        <div
          className={`register-sidebar ${hovered ? "show" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={logo} className={`first-logo ${hovered ? "hide" : ""}`} />
          <div className={`menu-options ${hovered ? "show" : ""}`}>
            <div className="other-menu">
              <Link to="/">
                <img src={logo} className="navbar-image" />
              </Link>
              <div className="option">
                <span
                  className={`option-name ${
                    selectedOption === "MAN" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick("MAN")}
                >
                  MAN
                  {selectedOption === "MAN" && (
                    <span className="arrow">&#8891;</span>
                  )}
                </span>
                <span
                  className={`option-name ${
                    selectedOption === "WOMEN" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick("WOMEN")}
                >
                  WOMEN
                  {selectedOption === "WOMEN" && (
                    <span className="arrow">&#8891;</span>
                  )}
                </span>
                <span
                  className={`option-name ${
                    selectedOption === "UNISEX" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick("UNISEX")}
                >
                  UNISEX
                  {selectedOption === "UNISEX" && (
                    <span className="arrow">&#8891;</span>
                  )}
                </span>
              </div>
              <ul className={`sub-options ${selectedOption ? "show" : ""}`}>
                <li>TOP</li>
                <li>OUTWEAR</li>
                <li>PANTS</li>
                <li>SKIRT</li>
                <li>ONE - PIECE</li>
                <li>ACCESSORIES</li>
                <Link className="navbar-link" to="/all">
                  <span className="option-name">ALL</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <nav className="nav">
          <ul className="right-section">
            {isLoggedIn ? (
              <>
                {!isLoading && <li>ACCOUNT</li>}
                <Link
                  to="/"
                  className="navbar-link"
                  onClick={() => logoutUser()}
                >
                  LOGOUT
                </Link>
              </>
            ) : (
              <li>
                <Link to="/login" className="navbar-link">
                  LOGIN
                </Link>
              </li>
            )}

            <li>SHOPPING BAG</li>
            {/* <Link to="/login">SHOPPING BAG</Link> */}
          </ul>
        </nav>
        <div className="contenido">{children}</div>
      </div>
    </section>
  );
}

export default AuthContainer;
