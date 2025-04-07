import { NavType } from "../types/nav";

export const menus: NavType[] = [
  {
    type: "group",
    label: "User & Access",
    children: [
      {
        type: "collapsible",
        label: "Staff",
        icon: "staff",
        children: [
          {
            type: "nav-item",
            label: "List",
            path: "/staff",
            icon: "list",
          },
          {
            type: "nav-item",
            label: "Create",
            path: "/staff/create",
            icon: "plus",
          },
        ],
      },
      {
        type: "nav-item",
        label: "Settings",
        icon: "settings",
        path: "/settings",
      },
    ],
  },
  {
    type: "group",
    label: "Content",
    children: [
      {
        type: "collapsible",
        label: "Posts",
        children: [
          {
            type: "nav-item",
            label: "List",
            path: "/posts",
          },
          {
            type: "nav-item",
            label: "Create",
            path: "/posts/create",
          },
        ],
      },
      {
        type: "nav-item",
        label: "Comments",
        path: "/comments",
      },
    ],
  },
];
