import "./Navbar.scss";
import React from "react";
import Logo from "../../assets/img/small-logo2.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/home">
        <img src={Logo} alt="FinestCopy" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active">
          Начало
        </NavLink>
        <NavLink exact="true" activeclassname="active">
          Услуги
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
