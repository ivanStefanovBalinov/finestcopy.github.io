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
        <NavLink exact="true" activeclassname="active">
          Начало
        </NavLink>
        <NavLink
          className="services"
          exact="true"
          activeclassname="active"
          onMouseEnter={() => showDropDown(true)}
          onMouseLeave={() => showDropDown(false)}
        >
          Услуги
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
          {dropdown && <Dropdown />}
        </NavLink>
        <NavLink exact="true" activeclassname="active">
          Портфолио
        </NavLink>
        <NavLink exact="true" activeclassname="active">
          Блог
        </NavLink>
        <NavLink exact="true" activeclassname="active">
          За Нас
        </NavLink>
        <NavLink exact="true" activeclassname="active">
          Маркетинг Магазин
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contacts">
          Контакти
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
