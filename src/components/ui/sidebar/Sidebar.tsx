import { sidebarData } from "./data";
import { SideNav } from "./SideNav";
import { cn } from "../../../utils/helpers";
import { LogoutOpen } from "react-huge-icons/outline";

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 h-screen w-full max-w-fit max-sm:hidden lg:max-w-[280px] lg:pl-5 lg:pt-5">
      <div
        className={cn(
          "flex h-full flex-col relative gap-y-10 bg-themeWhite p-1 lg:h-[calc(100%-20px)]",
          "items-center justify-start max-lg:py-10 lg:items-start lg:rounded-[20px] lg:p-[30px]"
        )}
      >
        <ul
          className="w-full rounded-lg grid grid-cols-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {sidebarData.map((data) => (
            <SideNav
              key={data.text}
              {...data}
              textStyles="hidden text-md lg:block"
            />
          ))}
        </ul>

        <button className="p-3 flex flex-row items-center gap-4 absolute bottom-0">
          <LogoutOpen
            width={24}
            height={24}
            className="bg-transparent text-[#435060]"
          />
          <h2 className="text-[12px] bg-transparent text-[#435060] font-bold font-DMSans">
            Logout
          </h2>
        </button>
      </div>
    </aside>
  );
};
