import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="custom-logo-container">
        <img src={Logo} alt="Logo" className="custom-logo" />
        <h1 className="custom-brand">Bolo Bazaar</h1>
      </div>
      <ul className="custom-nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
