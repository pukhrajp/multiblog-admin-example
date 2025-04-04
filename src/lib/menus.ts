export const menus = [
  {
    type: "group",
    label: "Main",
    children: [
      {
        type: "collapsible",
        label: "Users",
        icon: "users",
        children: [
          {
            type: "nav-item",
            label: "List",
            icon: "list",
          },
          {
            type: "nav-item",
            label: "Create",
            icon: "plus",
          },
        ],
      },
    ],
  },
];
