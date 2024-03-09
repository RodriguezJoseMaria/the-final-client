import { Link } from "react-router-dom";
import logo from "../../public/images/Logo/Y-3-Logo.png";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-options">
        <img src={logo} className="navbar-image" />
        <div className="option">
          <span className="option-name">MAN</span>
          <ul>
            <li>TOP</li>
            <li>OUTWEAR</li>
            <li>TROUSER</li>
          </ul>
        </div>
        <Link className="navbar-link" to="/all">
          <span className="option-name">ALL</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
