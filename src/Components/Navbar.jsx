import { NavLink } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          <FaHome size={20} />
          <span className="nav-text">Home</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          <FaProjectDiagram size={20} />
          <span className="nav-text">Projects</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          <FaEnvelope size={20} />
          <span className="nav-text">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;