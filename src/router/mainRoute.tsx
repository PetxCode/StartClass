import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
import App from "../App";
import Earth from "../pages/Earth";
import GetUsers from "../pages/GetUsers";
import SignIn from "../pages/Sign";
import Register from "../pages/Register";
import ErrorHandler from "../utils/ErrorBoundary";
import { PrivateRoute } from "./PrivateRoute";
import VerifiedPage from "../pages/VeriedPage";
import ViewProducts from "../pages/ViewProduct";
import CreateProduct from "../pages/CreateProduct";

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
        element: <VerifiedPage />,
        path: "verified",
      },
      {
        index: true,
        path: "earth",
        element: (
          <PrivateRoute>
            <Earth />
          </PrivateRoute>
        ),
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
      {
        index: true,
        path: "user",
        element: (
          <PrivateRoute>
            <GetUsers />
          </PrivateRoute>
        ),
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
      {
        index: true,
        path: "sign",
        element: <SignIn />,
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
      {
        index: true,
        path: "register",
        element: <Register />,
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
      {
        index: true,
        path: "error",
        element: <ErrorHandler />,
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
      {
        index: true,
        path: "create-product",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        ),
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
      {
        index: true,
        path: "view-product",
        element: (
          <PrivateRoute>
            <ViewProducts />
          </PrivateRoute>
        ),
        hasErrorBoundary: true,
        errorElement: <ErrorHandler />,
      },
    ],
  },
]);
