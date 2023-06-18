import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFileText,
  faLineChart,
  faPaintBrush,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Dropdown = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <ul
      className={dropdown ? "dropdown-hide" : "drop-menu"}
      onClick={() => setDropDown(!dropdown)}
    >
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faFileText} />
          &nbsp; Маркетинг чрез съдържание
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faFileText} />
          &nbsp; Копирайтинг
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faLineChart} />
          &nbsp; SEO оптимизация
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          {" "}
          <FontAwesomeIcon icon={faFacebook} />
          &nbsp; Facebook реклама
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faInstagram} />
          &nbsp; Instagram реклама
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faGoogle} />
          &nbsp; Google реклама
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faPaintBrush} />
          &nbsp; Графичен дизайн
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faCode} />
          &nbsp; Изработка на уебсайт
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)}>
          <FontAwesomeIcon icon={faPencil} />
          &nbsp; Редакторски и коректорски услуги
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
