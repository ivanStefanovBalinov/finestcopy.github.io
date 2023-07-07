import {
  faEnvelope,
  faGear,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ourProcessInfo = [
  {
    header: "Маркетинг Анализ ",
    textInfo:
      "Пълен одит на маркетинговия микс и намиране на слабите места на бизнеса. Идентифициране на таргет аудиториите и проучване на ключови възможности за растеж чрез дигитални средства.",
    icon: <FontAwesomeIcon icon={faStar} />,
  },
  {
    header: "Видими Онлайн",
    textInfo:
      "Разработване на стратегия за подобряване онлайн видимостта и позициите на уебсайта, присъствието в социалните мрежи, провеждането на рекламни кампании и промоционални активности.",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    header: "Комуникационни Канали",
    textInfo:
      "Прилагане на стратегията за SEO оптимизация, SMM маркетинг и реклама, имейл маркетинг и други. Избор на комуникационни канали и разработване на маркетинг календар. Подготовка и публикуване на съдържанието. ",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    header: "KPI диагностика",
    textInfo:
      "Оценка на получените данни спрямо поставените ключови показатели за ефективност (KPI). Откриване на потенциални възможности за растеж. Коригиране на стратегията при необходимост. ",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
];

export default ourProcessInfo;
