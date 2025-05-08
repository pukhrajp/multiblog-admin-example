import React, { useEffect } from "react";
import { AuthContext } from "./auth-context";
import myAxios from "../../../lib/axios";
import { AuthUser } from "../../../types/context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authUser, setAuthUser] = React.useState<AuthUser | null>(null);

  useEffect(() => {
    (async () => {
      const authUser = await myAxios.get("/auth/current-user");
      if (authUser.status === 200) {
        setAuthUser(authUser.data);
      }
    })();
  }, []);

  const updateAuthUser = (user: AuthUser) => {
    setAuthUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authUser,
        updateAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
