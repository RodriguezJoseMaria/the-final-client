import { Link } from "react-router-dom";
import logo from "../../public/images/Logo/Y-3-Logo.png";
import { useAuth } from "../context/auth.context";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useAuth();
  console.log(user);
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
        {isLoggedIn ? (
          <>
            <li>Hello {user.name}</li>
            <Link to="/" onClick={() => logoutUser()}>
              LOGOUT
            </Link>
          </>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}

        <li>SHOPPING BAG</li>
        {/* <Link to="/login">SHOPPING BAG</Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
