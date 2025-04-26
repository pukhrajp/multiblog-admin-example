import { RootLayout } from "../components/layouts/root";
import { Dashboard } from "../pages/dashboard";
import { DefaultLayout } from "../components/layouts/default-layout";
import { StaffList } from "../pages/staff/list";
import { Login } from "../pages/auth/login";

export const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: DefaultLayout,
        children: [
          { index: true, Component: Dashboard },
          { path: "staff", Component: StaffList },
        ],
      },
      {
        path: "auth",
        children: [{ path: "login", Component: Login }],
      },
    ],
  },
];
