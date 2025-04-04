import { NavCollapsible } from "./nav-collapsible";
import { NavGroup } from "./nav-group";
import { NavItem } from "./nav-item";

export function NavChildren({ items }: { items: any[] }) {
  return (
    <>
      {items.map((item, index) => {
        if (item.type === "nav-item") {
          return <NavItem key={index} item={item} />;
        } else if (item.type === "collapsible") {
          return <NavCollapsible key={index} item={item} />;
        } else if (item.type === "group") {
          return <NavGroup key={index} item={item} />;
        }
      })}
    </>
  );
}
