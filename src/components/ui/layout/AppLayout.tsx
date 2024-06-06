import { useEffect } from "react";
import { cn } from "../../../utils/helpers";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MobileNav } from "./MobileNav";

export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location, navigate]);

  return (
    <div
      className={cn(
        "bg-theme font-light text-themeText transition-[background-color] duration-500 ease-out"
      )}
    >
      <div className="flex max-sm:min-h-screen max-sm:pb-20">
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};
