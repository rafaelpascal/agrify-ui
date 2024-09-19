import { SideNavProps } from "./SideNav";
import { Home, Setting, UsersTriple, Cart } from "react-huge-icons/outline";

export const sidebarData: SideNavProps[] = [
  { href: "/dashboard", icon: Home, text: "Dashboard" },
  { href: "/users", icon: UsersTriple, text: "Users" },
  { href: "/products", icon: Cart, text: "Products" },
  { href: "/orders", icon: Setting, text: "Orders" },
  { href: "/category", icon: Setting, text: "Category" },
];
