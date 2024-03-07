import { Link } from "react-router-dom";
import logo from "../../public/images/Logo/Y-3-Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} className="navbar-image" />
        <div className="gender-section">
          <span>WOMAN</span>
          <span>MAN</span>
          <span>UNISEX</span>
        </div>
      </div>
      <ul className="right-section">
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>SHOPPING BAG</li>
        {/* <Link to="/login">SHOPPING BAG</Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
