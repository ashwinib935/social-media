import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home||</NavLink>
        <NavLink to="/login">Login||</NavLink>
      </nav>
    </div>
  );
}

export default Header;
