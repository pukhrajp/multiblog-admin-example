import { NavChildren } from "./nav-children";

export function NavGroup({ item }: { item: any }) {
  return (
    <div className="nav-group">
      <h2>{item.label}</h2>
      <NavChildren items={item.children} />
    </div>
  );
}
