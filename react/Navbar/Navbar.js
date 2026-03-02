import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav">
      <div class="logoname">
        <h2>M & M Restro</h2>
      </div>
      <div class="links">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      </div>
      
    </div>
  );
}
