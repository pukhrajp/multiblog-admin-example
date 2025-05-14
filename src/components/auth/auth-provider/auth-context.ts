import React from "react";
import { AuthUser, AuthUserContext } from "../../../types/context";

export const AuthContext = React.createContext<AuthUserContext>({
  authUser: null,
  authLogin: (accessToken?: string, user?: AuthUser) => {
    console.log("authLogin called with: ", accessToken, user);
  },
  authLogout: () => {},
});
