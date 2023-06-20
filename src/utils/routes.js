import AboutPage from "../components/about-page/AboutPage";
import BlogPage from "../components/blog-page/BlogPage";
import Contacts from "../components/contact-page/Contacts";
import HomePage from "../components/home-page/HomePage";
import MarketingStore from "../components/marketing-store-page/MarketingStore";
import PortfolioPage from "../components/portfolio-page/PortfolioPage";
import Copywriting from "../components/servicec-page/copywriting/Copywriting";
import EmailMarketing from "../components/servicec-page/email-marketing/EmailMarketing";
import FacebookAdd from "../components/servicec-page/fb-add/FacebookAdd";
import GoogleAdd from "../components/servicec-page/google-add/GoogleAdd";
import GraphicDesign from "../components/servicec-page/graphic-design/GraphicDesign";
import InstagramAdd from "../components/servicec-page/instagram-add/InstagramAdd";
import Seo from "../components/servicec-page/seo/Seo";
import WebDevelopment from "../components/servicec-page/web-developening/WebDevelopment";
import ContentMarketing from "../components/servicec-page/content-marketing/ContentMarketing";
import ServicesMainPage from "../components/servicec-page/services-main/ServicesMainPage";
import TimeoutModal from "../components/timeout-modal/TimeoutModal";

const routes = {
  timeOut: {
    path: "/",
    name: "",
    element: <TimeoutModal />,
  },
  home: {
    path: "/home",
    name: "Home",
    element: <HomePage />,
  },
  services: {
    path: "/services",
    name: "Services",
    element: <ServicesMainPage />,
  },
  contentMarketing: {
    path: "/services/content-marketing",
    name: "contentMarketing",
    element: <ContentMarketing />,
  },
  copywriting: {
    path: "/services/copywriting",
    name: "Copywriting",
    element: <Copywriting />,
  },
  seo: {
    path: "/services/seo-optimization",
    name: "SEO",
    element: <Seo />,
  },
  facebookAdd: {
    path: "/services/facebookAdd",
    name: "facebookAdd",
    element: <FacebookAdd />,
  },
  instagramAdd: {
    path: "/services/instagramAdd",
    name: "instagramAdd",
    element: <InstagramAdd />,
  },
  googleAdd: {
    path: "/services/googleAdd",
    name: "googleAdd",
    element: <GoogleAdd />,
  },
  graphicDesign: {
    path: "/services/graphicDesign",
    name: "graphicDesign",
    element: <GraphicDesign />,
  },
  webDevelopment: {
    path: "/services/webDevelopment",
    name: "webDevelopment",
    element: <WebDevelopment />,
  },
  emailMarketing: {
    path: "/services/emailMarketing",
    name: "emailMarketing",
    element: <EmailMarketing />,
  },
  portfolio: {
    path: "/portfolio",
    name: "portfolio",
    element: <PortfolioPage />,
  },
  blog: {
    path: "/blog",
    name: "blog",
    element: <BlogPage />,
  },
  about: {
    path: "/about",
    name: "about",
    element: <AboutPage />,
  },
  marketingStore: {
    path: "/marketingStore",
    name: "marketingStore",
    element: <MarketingStore />,
  },
  contacts: {
    path: "/contacts",
    name: "contacts",
    element: <Contacts />,
  },
};

export default routes;
