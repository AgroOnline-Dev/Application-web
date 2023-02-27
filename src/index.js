import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "./index.css";
import IngPage from "./components/pages/IngPage";
import ErrorPage from "./components/pages/error-page";
import Login from "./routes/signup";
import Signin from "./routes/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IngPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
