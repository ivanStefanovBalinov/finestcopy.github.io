import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FOOTER_INFO = {
  colOneInfo:
    "Finest Copy - Digital Marketing Solutions е дигитална агенция за маркетинг и реклама създадена в България <3. Във Finest Copy сме посветени на мисията да помагаме на нашите клиенти да постигнат бизнес целите си чрез иновативни и ориентирани към резултатите маркетингови решения. С дългогодишен опит и екип от експерти в индустрията, ние предоставяме персонализирани стратегии и работим с отдаденост за измерими резултати, които стимулират растежа и успеха Ви. ",
  colTwoServices: [
    "Маркетинг чрез съдържание",
    "Копирайтинг",
    "SEO оптимизация ",
    "Facebook реклама",
    "Instagram реклама",
    "Google реклама",
    "Графичен дизайн",
    "Изработка на уебсайт",
    "Email маркетинг",
  ],
  colThreeBlogPosts: [
    "SEO oптимизация или ИИ [SEO vs. AI]",
    "Законопроект за забрана на surveillance advertising",
  ],
  colFourContacts: [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      info: "office@finestcopy.com",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
  ],
};

export default FOOTER_INFO;
