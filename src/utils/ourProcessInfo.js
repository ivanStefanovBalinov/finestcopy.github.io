import {
  faEnvelope,
  faGear,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ourProcessInfo = [
  {
    header: "Discovery",
    textInfo:
      "We establish the deliverables, turnaround time, technical specifications, and ad platform with the client. We check client design files, or begin brainstorming our own designs with consideration for file size limit and ad platform.",
    icon: <FontAwesomeIcon icon={faStar} />,
  },
  {
    header: "Design Master",
    textInfo:
      "For a client provided design we code a single master animation for approval. If we are tasked with the design, we create a base storyboard of our design and put it forward for client approval.",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    header: "Production",
    textInfo:
      "We create storyboards for each banner size of our own design and/or incorporate any changes required for the master animation. On client approval, we code all banner sizes and put forward for final approval.",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    header: "Delivery",
    textInfo:
      "All completed HTML5 banners go through our QA process using tools for technical validations. We then deliver all banners to the client, create backups if necessary, and push the banners directly to the relevant ad platform if required.",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
];

export default ourProcessInfo;
