import "./Navbar.scss";
import React, { useState } from "react";
import Logo from "../../../assets/img/small-logo2.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [dropdown, showDropDown] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/home">
        <img src={Logo} alt="FinestCopy" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          to="/home"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          end
        >
          Начало
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "services")}
          exact="true"
          onMouseEnter={() => showDropDown(true)}
          onMouseLeave={() => showDropDown(false)}
        >
          Услуги
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
          {dropdown && <Dropdown />}
        </NavLink>
        <NavLink
          to="/portfolio"
          exact="true"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Портфолио
        </NavLink>
        <NavLink
          to="/blog"
          exact="true"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Блог
        </NavLink>
        <NavLink
          to="/about"
          exact="true"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          За Нас
        </NavLink>
        <NavLink to="/marketingStore" exact="true" activeclassname="active">
          Маркетинг Магазин
        </NavLink>
        <NavLink to="/contacts" exact="true" className="contacts">
          Контакти
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
