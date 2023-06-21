import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FOOTER_INFO = {
  colOneInfo:
    "Finest Copy - Digital Marketing Solutions е дигитална агенция за маркетинг и реклама създадена в България <3. Във Finest Copy сме посветени на мисията да помагаме на нашите клиенти да постигнат бизнес целите си чрез иновативни и ориентирани към резултатите маркетингови решения.  ",
  colTwoServices: [
    {
      title: "Маркетинг чрез съдържание",
      path: "/services/content-marketing",
      id: 1,
    },
    { title: "Копирайтинг", path: "/services/copywriting", id: 2 },
    { title: "SEO оптимизация", path: "/services/seo-optimization", id: 3 },
    { title: "Facebook реклама", path: "/services/facebookAdd", id: 4 },
    { title: "Instagram реклама", path: "/services/instagramAdd", id: 5 },
    { title: "Google реклама", path: "/services/googleAdd", id: 6 },
    { title: "Графичен дизайн", path: "/services/graphicDesign", id: 7 },
    { title: "Изработка на уебсайт", path: "/services/webDevelopment", id: 8 },
    { title: "Email маркетинг", path: "/services/emailMarketing", id: 9 },
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
