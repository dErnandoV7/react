import React from "react";

import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to={"contact"} className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
    </div>
  );
};
