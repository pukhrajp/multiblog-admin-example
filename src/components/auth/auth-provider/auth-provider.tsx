import React, { useEffect } from "react";
import { AuthContext } from "./auth-context";
import myAxios from "../../../lib/axios";
import { AuthUser } from "../../../types/context";
import { useNavigate } from "react-router-dom";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authUser, setAuthUser] = React.useState<AuthUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const authUser = await myAxios.get("/auth/current-user");
        if (authUser.status === 200) {
          console.log("authUser is: ", authUser);
          authLogin(
            authUser?.data?.data?.accessToken,
            authUser.data?.data?.user
          );
        }
      } catch (err) {
        setAuthUser(null);

        navigate("/auth/login");
      }
    })();
  }, []);

  const authLogin = (accessToken?: string, user?: AuthUser) => {
    console.log("authLogin called with: ", accessToken, user);
    if (user && accessToken) {
      localStorage.setItem("accessToken", accessToken);
      setAuthUser(user);
      navigate("/");
      return;
    }
    localStorage.removeItem("accessToken");
    setAuthUser(null);
  };

  const authLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("accessToken");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        authLogin,
        authLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
