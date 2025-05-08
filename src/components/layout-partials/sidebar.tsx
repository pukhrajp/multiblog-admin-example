import { Link } from "react-router-dom";
import { menus } from "../../lib/menus";
import { Navbar } from "../ui/navbar";
// import {useContext} from "react";
// import { SidebarContext } from "../../hooks/providers/sidebarProvider";

export function Sidebar() {
  // const { open, setOpen } = useContext(SidebarContext);
  return (
    <aside className="w-64 bg-accent">
      <Link to="/" className="block p-4 text-xl font-bold text">
        mBlog
      </Link>
      <Navbar items={menus} />
    </aside>
  );
}
