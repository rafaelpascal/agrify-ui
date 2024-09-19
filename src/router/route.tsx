import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/ui/layout/AppLayout";
import Home from "../pages/Home.js";
import Users from "../pages/Users.js";
import Account from "../pages/Account.js";
import Products from "../pages/Products.js";
import Orders from "../pages/Orders.js";
import Category from "../pages/Category.js";
import Disputes from "../pages/Disputes.js";
import DisputePage from "../pages/DisputePage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "/users/account",
        element: <Account />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "disputes",
        element: <Disputes />,
      },
      {
        path: "/disputes/:id",
        element: <DisputePage />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
