import React, { createContext } from "react";

export const SidebarContext = createContext<
  | { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }
  | undefined
>({ open: false, setOpen: () => {} });

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
