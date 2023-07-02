import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import "./Sidebar.css";
function Sidebar() {
  const { logoutHandler } = useAuth();
  const navigate = useNavigate();
  const handleIsActive = ({ isActive }) => {
    if (isActive)
      return {
        backgroundColor: "#082f49",
        borderRadius: "5px",
        padding: "0.5rem 0.3rem",
        width: "150px",
        fontWeight: "bold",
      };
  };
  return (
    <div className="sidebar-container">
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>
            <div className="main-header-home">
              <h1>Socially </h1>
            </div>
          </li>
          <li>
            <NavLink to="/" className="nav-item" style={handleIsActive}>
              {" "}
              <HiHome className="sidebar-icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" className="nav-item" style={handleIsActive}>
              <MdOutlineExplore className="sidebar-icon" />
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmark" className="nav-item" style={handleIsActive}>
              <BsFillBookmarkFill className="sidebar-icon" />
              Bookmark
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <div onClick={logoutHandler} className="home-logout">
              <FiLogOut className="sidebar-icon" />
              <p>Logout</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
