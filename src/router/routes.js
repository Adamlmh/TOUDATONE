import { lazy } from "react";

import { Navigate } from "react-router-dom";

const Layout = lazy(() => import("../components/layout"));
const Home = lazy(() => import("../page/home"));
const Price = lazy(() => import("../page/price"));
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      // {
      //   path: "shop",
      //   element: <Shop />,
      // },
      ,
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];

export default routes;
