import { RootLayout } from "../components/layouts/root";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/auth/login";
import { DefaultLayout } from "../components/layouts/default-layout";
import { StaffList } from "../pages/staff/list";
import Settings from "../pages/settings";
import CreatStaff from "../pages/staff/creatStaff";
import PostList from "../pages/post/list";
import CreatPost from "../pages/post/creatPost";
import Comment from "../pages/comment";
import { SignUp } from "../pages/auth/signup";
import { ChatList } from "../pages/chats/list";
import CreateChats from "../pages/chats/createChats";
import { ChatDetail } from "../pages/chats/ChatDetail";

export const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: DefaultLayout,
        children: [
          { index: true, Component: Dashboard },
          {
            path: "staff",

            children: [
              { index: true, Component: StaffList },
              { path: "create", Component: CreatStaff },
            ],
          },
          {
            path: "settings",
            Component: Settings,
          },
          {
            path: "posts",
            children: [
              { index: true, Component: PostList },
              { path: "create", Component: CreatPost },
            ],
          },
          {
            path: "comments",
            Component: Comment,
          },
          {
            path: "chats",
            children: [
              { index: true, Component: ChatList },
              { path: "create", Component: CreateChats },
              { path: ":id", Component: ChatDetail },
            ],
          },
        ],
      },
      {
        path: "auth",
        children: [{ path: "login", Component: Login }],
      },
      {
        path: "auth",
        children: [{ path: "signup", Component: SignUp }],
      },
    ],
  },
];
