import { Bell } from "react-huge-icons/outline";
import { Heading } from "../../../ui/typography";

export interface TopNavProps {
  title: string;
}

export const TopNav = ({ title }: TopNavProps) => {
  return (
    <header className="flex w-full justify-between items-center max-md:items-start">
      <div>
        <Heading
          level={6}
          className="text-[16px] text-[#000] font-bold md:text-[16px]"
        >
          {title}
        </Heading>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Bell className="w-[40px] text-[#000] mr-10 h-[40px]" />
        <div className="avatar online">
          <div className="w-[44px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h2 className="text-[12px] p-0 m-0 font-bold font-DMSans text-[#25313E]">
            Uzoh Daberechi
          </h2>
          <p className="text-[10px] p-0 m-0 font-normal font-DMSans text-[#8F94A8]">
            uzoh@agrifyemail.com
          </p>
        </div>
      </div>
    </header>
  );
};
