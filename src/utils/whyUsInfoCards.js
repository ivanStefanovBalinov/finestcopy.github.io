import {
  faBriefcase,
  faHandshake,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const whyUsInfo = [
  {
    title: "Flexibility",
    infoText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    iconCode: <FontAwesomeIcon icon={faSliders} />,
    id: Math.floor(Math.random() * 486748936312),
  },
  {
    title: "Experience",
    infoText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    iconCode: <FontAwesomeIcon icon={faBriefcase} />,
    id: Math.floor(Math.random() * 486748936312),
  },
  {
    title: "Costumer Oriented",
    infoText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    iconCode: <FontAwesomeIcon icon={faHandshake} />,
    id: Math.floor(Math.random() * 486748936312),
  },
];

export default whyUsInfo;
