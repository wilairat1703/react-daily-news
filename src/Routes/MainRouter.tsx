import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
import Navbar from "../layout/Navbar";
import AllNew from "../pages/AllNew";
import DetailNew from "../pages/DetailNew";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";

const mainRouter = createBrowserRouter([
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/news/:id",
        element: <AllNew />,
      },
      {
        path: "/detail",
        element: <DetailNew />,
      },
    ],
  },
]);

export default mainRouter;
