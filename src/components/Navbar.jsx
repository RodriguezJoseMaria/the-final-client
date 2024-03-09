import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import "./Navbar.css";

function Navbar({ children }) {
  const { isLoggedIn, user, logoutUser, isLoading } = useAuth();
  console.log(user, isLoggedIn, isLoading);
  return (
    <div className="body">
      <nav className="nav">
        <ul className="right-section">
          {isLoggedIn ? (
            <>
              {/* {!isLoading && <li>Hello {user.name}</li>} */}
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
      {children}
    </div>
  );
}

export default Navbar;
