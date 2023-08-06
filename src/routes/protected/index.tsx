import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { lazyImport } from "src/utils/lazyImport";
import { MainLayout } from "src/components/layout/MainLayout";

import "./style.scss";

const { Dashboard } = lazyImport(() => import("src/pages/Home/"), "Dashboard");

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "",
    element: <App />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  { path: "/login", element: <Navigate to="/" /> },
];
