import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
import App from "../App";
import Earth from "../pages/Earth";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        index: true,
        path: "earth",
        element: <Earth />,
      },
    ],
  },
]);
