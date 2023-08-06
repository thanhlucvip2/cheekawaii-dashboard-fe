import { Navigate } from "react-router-dom";

import { lazyImport } from "src/utils/lazyImport";

import "./style.scss";

const { Login } = lazyImport(() => import("src/pages/Auth/"), "Login");

export const privateRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/", element: <Navigate to="/login" /> },
];
