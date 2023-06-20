import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faFileText,
  faLineChart,
  faPaintBrush,
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
        <Link
          onClick={() => setDropDown(false)}
          to="/services/content-marketing"
        >
          <FontAwesomeIcon icon={faFileText} />
          &nbsp; Маркетинг чрез съдържание
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/copywriting">
          <FontAwesomeIcon icon={faFileText} />
          &nbsp; Копирайтинг
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setDropDown(false)}
          to="/services/seo-optimization"
        >
          <FontAwesomeIcon icon={faLineChart} />
          &nbsp; SEO оптимизация
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/facebookAdd">
          <FontAwesomeIcon icon={faFacebook} />
          &nbsp; Facebook реклама
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/instagramAdd">
          <FontAwesomeIcon icon={faInstagram} />
          &nbsp; Instagram реклама
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/googleAdd">
          <FontAwesomeIcon icon={faGoogle} />
          &nbsp; Google реклама
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/graphicDesign">
          <FontAwesomeIcon icon={faPaintBrush} />
          &nbsp; Графичен дизайн
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/webDevelopment">
          <FontAwesomeIcon icon={faCode} />
          &nbsp; Изработка на уебсайт
        </Link>
      </li>
      <li>
        <Link onClick={() => setDropDown(false)} to="/services/emailMarketing">
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp; Имейл Маркетинг
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
