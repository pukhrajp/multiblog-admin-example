import { NavChildren } from "./nav-children";

export function NavCollapsible({ item }: { item: any }) {
  return (
    <div className="nav-collapsible">
      <h2>{item.label}</h2>
      <NavChildren items={item.children} />
    </div>
  );
}
