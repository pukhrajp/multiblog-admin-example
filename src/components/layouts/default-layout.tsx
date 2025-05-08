import { Outlet } from "react-router-dom";
import { Sidebar } from "../layout-partials/sidebar";
import { Header } from "../layout-partials/header";
import { AuthProvider } from "../auth/auth-provider/auth-provider";

export function DefaultLayout() {
  return (
    <AuthProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="h-screen w-full">
          <Header />
          <div className="p-4 overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}
