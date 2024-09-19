import { SideNavProps } from "./SideNav";
import {
  Home,
  UsersTriple,
  Cart,
  ShoppingBasket,
  CardCheck,
  GridFourTwo,
} from "react-huge-icons/outline";

export const sidebarData: SideNavProps[] = [
  { href: "/dashboard", icon: Home, text: "Dashboard" },
  { href: "/users", icon: UsersTriple, text: "Users" },
  { href: "/products", icon: Cart, text: "Products" },
  { href: "/orders", icon: ShoppingBasket, text: "Orders" },
  { href: "/category", icon: CardCheck, text: "Category" },
  { href: "/disputes", icon: GridFourTwo, text: "Disputes" },
];
