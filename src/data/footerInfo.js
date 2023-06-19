import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FOOTER_INFO = {
  colOneInfo:
    "Finest Copy - Digital Marketing Solutions е дигитална агенция за маркетинг и реклама създадена в България <3. Във Finest Copy сме посветени на мисията да помагаме на нашите клиенти да постигнат бизнес целите си чрез иновативни и ориентирани към резултатите маркетингови решения.  ",
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
      icon: <FontAwesomeIcon className="lamp-icon" icon={faEnvelope} />,
      info: "office@finestcopy.com",
    },
    {
      icon: <FontAwesomeIcon className="lamp-icon" icon={faPhone} />,
      info: "+359883909040",
    },
  ],
};

export default FOOTER_INFO;
