import { Link } from "react-router-dom";
import { NavItemProps } from "../../types/nav";

export function NavItem({ item }: NavItemProps) {
  return <Link to={item.path || "/"}>{item.label}</Link>;
}
