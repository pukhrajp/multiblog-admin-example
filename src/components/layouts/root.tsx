import { Outlet } from "react-router-dom";
import { AuthProvider } from "../auth/auth-provider/auth-provider";

export function RootLayout() {
  return (
    <>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}
