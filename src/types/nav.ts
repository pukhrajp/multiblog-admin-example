export interface NavItemProps {
  item: NavItem;
}
export interface NavItem {
  path?: string;
  label: string;
  icon?: string;
}

export interface NavItemType {
  type: "nav-item";
  label: string;
  icon?: string;
  path: string;
}

export interface NavCollapsibleType {
  type: "collapsible";
  label: string;
  icon?: string;
  children: NavItemType[];
}

export interface NavGroupType {
  type: "group";
  label: string;
  children: (NavItemType | NavCollapsibleType)[];
}

export type NavType = NavItemType | NavGroupType | NavCollapsibleType;
