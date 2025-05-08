import React from "react";
import { AuthUser, AuthUserContext } from "../../../types/context";

export const AuthContext = React.createContext<AuthUserContext>({
  updateAuthUser: (user: AuthUser) => {},
});
