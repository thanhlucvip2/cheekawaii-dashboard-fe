import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { lazyImport } from "src/utils/lazyImport";

import "./style.scss";

const { Dashboard } = lazyImport(
  () => import("src/pages/dashboard/"),
  "Dashboard"
);

const App = () => {
  return (
    // <MainLayout>
    <Suspense fallback={<div>loading</div>}>
      <Outlet />
    </Suspense>
    // </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
