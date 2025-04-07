import { NavType } from "../../types/nav";
import { NavChildren } from "./nav-children";

export function Navbar({ items }: { items: NavType[] }) {
  return <NavChildren items={items} />;
}
