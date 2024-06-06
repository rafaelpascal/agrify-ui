import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/ui/layout/AppLayout";
import { Login } from "../pages/Login.js";
import { Welcome } from "../pages/Welcome.js";
import { Home } from "../pages/Home.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
