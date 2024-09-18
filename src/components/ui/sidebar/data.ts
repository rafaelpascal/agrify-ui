import { SideNavProps } from "./SideNav";
import { Home, InvoicePercent, Store, Setting } from "react-huge-icons/outline";

export const sidebarData: SideNavProps[] = [
  { href: "/dashboard", icon: Home, text: "Dashboard" },
  { href: "/users", icon: InvoicePercent, text: "Users" },
  { href: "/products", icon: Store, text: "Products" },
  { href: "/orders", icon: Setting, text: "Orders" },
];
