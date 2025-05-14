import { Outlet } from "react-router-dom";
import { Sidebar } from "../layout-partials/sidebar";
import { Header } from "../layout-partials/header";

export function DefaultLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="h-screen w-full">
        <Header />
        <div className="p-4 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
