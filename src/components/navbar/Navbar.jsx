import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);
const logout=()=>{
  dispatch({ type: "LOGIN_START" });
 
}
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">bookingApp</span>
        </Link>
        {user ? <>
          <p className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           { user.username}
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item" style={{cursor:"pointer"}}onClick={logout}>Logout</li>         
          </ul>
        </p>
        
        </>: (
          <div className="navItems">
            <button className="navButton"><Link to="/register" style={{color:"inherit",textDecoration:"none"}}>Subscribe</Link></button>
            <button className="navButton">    <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>Login</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
