import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SidebarProvider from "./hooks/providers/sidebarProvider.tsx";
import { StoreProvider } from "./redex/provider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </StoreProvider>
  </StrictMode>
);
