import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/ui/layout/AppLayout";
import Home from "../pages/Home.js";
import Users from "../pages/Users.js";
import Account from "../pages/Account.js";
import Products from "../pages/Products.js";

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
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
