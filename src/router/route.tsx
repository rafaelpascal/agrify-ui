import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/ui/layout/AppLayout";
import Home from "../pages/Home.js";
import Users from "../pages/Users.js";
import Account from "../pages/Account.js";

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
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
