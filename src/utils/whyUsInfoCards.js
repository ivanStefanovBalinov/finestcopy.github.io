import {
  faBriefcase,
  faHandshake,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const whyUsInfo = [
  {
    title: "Ежедневно проследяване",
    infoText:
      "Работим за проследяване и оптимизиране на резултатите всекидневно в различните дигитални канали, в които присъстват клиентите ни.",
    iconCode: <FontAwesomeIcon icon={faSliders} />,
    id: Math.floor(Math.random() * 486748936312),
  },
  {
    title: "Собствен проектен мениджър",
    infoText:
      "Комуникацията Ви с нас ще се води само от един човек, който очертава задачите, сроковете и необходимите ресурси.",
    iconCode: <FontAwesomeIcon icon={faBriefcase} />,
    id: Math.floor(Math.random() * 486748936312),
  },
  {
    title: "Прозрачен работен процес",
    infoText:
      "Получавате пълна прозрачност относно нашите дейности и напредък с достъп до профили и месечни отчети за работа.",
    iconCode: <FontAwesomeIcon icon={faHandshake} />,
    id: Math.floor(Math.random() * 486748936312),
  },
];

export default whyUsInfo;
