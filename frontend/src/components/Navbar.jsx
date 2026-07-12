import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{padding:"20px",display:"flex",justifyContent:"space-between"}}>
      <h2>LinguaLearn</h2>

      <div>
        <Link to="/">Home </Link>
        <Link to="/courses">Courses </Link>
        <Link to="/login">Login </Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;