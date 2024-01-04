import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

export type LinksType = {
  title: string;
  to: string;
  onClick?: () => void;
};

export const Links: React.FC<LinksType> = ({ to, title, onClick }) => {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
        {title}
      </NavLink>
    </li>
  );
};
