import { NavType } from "../../types/nav";
import { NavCollapsible } from "./nav-collapsible";
import { NavGroup } from "./nav-group";
import { NavItem } from "./nav-item";

const navComponents = {
  "nav-item": NavItem,
  collapsible: NavCollapsible,
  group: NavGroup,
};

export function NavChildren({ items }: { items: NavType[] }) {
  return (
    <>
      {items.map((item, index) => {
        const NavComponent = navComponents[item.type];
        return <div className="flex pl-4"><NavComponent key={index} item={item} /></div>;
      })}
    </>
  );
}
