import { Link } from "react-router-dom";
import { NavChildren } from "../ui/nav-children";
import { menus } from "../../lib/menus";

export function Sidebar() {
  return (
    <aside className="w-64 bg-accent">
      <Link to="/" className="block p-4 text-xl font-bold text">
        mBlog
      </Link>
      <NavChildren items={menus} />
    </aside>
  );
}
