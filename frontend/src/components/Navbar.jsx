import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        LinguaLearn
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

    </nav>
  );
}

export default Navbar;