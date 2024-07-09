import { SideNav } from "../sidebar/SideNav";
import { cn } from "../../../utils/helpers";
import { sidebarData } from "../sidebar/data";

export const MobileNav = () => {
  return (
    <div className={cn("fixed bottom-0 w-full sm:hidden")}>
      <div className="flex justify-between gap-4 overflow-x-auto border-t border-primary/10">
        {sidebarData.map((opt) => (
          <SideNav
            key={opt.href}
            textStyles="hidden"
            className={({ isActive }) =>
              cn({
                "before:hidden after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-primary after:opacity-20":
                  isActive,
              })
            }
            {...opt}
          />
        ))}
      </div>
    </div>
  );
};
