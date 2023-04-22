import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
import App from "../App";
import Earth from "../pages/Earth";
import GetUsers from "../pages/GetUsers";
import SignIn from "../pages/Sign";

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
      {
        index: true,
        path: "user",
        element: <GetUsers />,
      },
      {
        index: true,
        path: "sign",
        element: <SignIn />,
      },
    ],
  },
]);
