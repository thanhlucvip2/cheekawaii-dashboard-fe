import { Sidebar } from "./type";

export const ROUTES = {
  PRIVATE: {
    LOGIN: {
      INDEX: "/login",
    },
  },
  PROTECTED: {
    HOME: {
      INDEX: "/",
    },
    DASHBOARD: {
      INDEX: "/dashboard",
    },
    FILE_DRIVER: {
      INDEX: "/file-driver",
      UPLOAD: "/upload",
    },
  },
  PUBLIC: {
    PAGE_NOT_FOUND: {
      INDEX: "/*",
    },
  },
};

export const SIDE_BAR: Sidebar[] = [
  {
    LABEL: "Dashboard",
    ICON: "",
    ROUTES: ROUTES.PROTECTED.DASHBOARD.INDEX,
  },
  {
    LABEL: "File driver",
    ICON: "",
    ROUTES: ROUTES.PROTECTED.FILE_DRIVER.INDEX,
    CHILDREN: [
      {
        LABEL: "Upload",
        ICON: "",
        ROUTES: ROUTES.PROTECTED.FILE_DRIVER.UPLOAD,
      },
    ],
  },
];
