import { createBrowserRouter } from "react-router-dom";
import routes from "../utils/routes";
import ErrorPage from "../components/error-page/ErrorPage";
import RootLayout from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: routes.timeOut.element },
      { path: routes.home.path, element: routes.home.element },
      { path: routes.services.path, element: routes.services.element },
      {
        path: routes.contentMarketing.path,
        element: routes.contentMarketing.element,
      },
      { path: routes.copywriting.path, element: routes.copywriting.element },
      { path: routes.seo.path, element: routes.seo.element },
      { path: routes.facebookAdd.path, element: routes.facebookAdd.element },
      { path: routes.instagramAdd.path, element: routes.instagramAdd.element },
      { path: routes.googleAdd.path, element: routes.googleAdd.element },
      {
        path: routes.graphicDesign.path,
        element: routes.graphicDesign.element,
      },
      {
        path: routes.webDevelopment.path,
        element: routes.webDevelopment.element,
      },
      {
        path: routes.emailMarketing.path,
        element: routes.emailMarketing.element,
      },
      { path: routes.portfolio.path, element: routes.portfolio.element },
      { path: routes.blog.path, element: routes.blog.element },
      { path: routes.about.path, element: routes.about.element },
      {
        path: routes.marketingStore.path,
        element: routes.marketingStore.element,
      },
      { path: routes.contacts.path, element: routes.contacts.element },
    ],
  },
]);

export default router;
