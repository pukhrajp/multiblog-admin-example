import { Component } from "react";
import { RootLayout } from "../components/layouts/root";
import { About } from "../pages/about";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { DefaultLayout } from "../components/layouts/default-layout";
import path from "path";
import { StaffList } from "../pages/staff/list";

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
