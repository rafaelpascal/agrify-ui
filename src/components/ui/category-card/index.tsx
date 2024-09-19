import { cn } from "../../../utils/helpers";

export interface DashboardCardProps {
  icon: string;
  title: string;
  gty: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  className?: string;
}

export const CategoryCard = (props: DashboardCardProps) => {
  const { children, icon, title, gty, className } = props;

  return (
    <div
      className={cn(
        "rounded-r-[8px] bg-themeWhite px-[22px] w-full flex justify-center gap-4 items-center flex-col py-[12px] h-full",
        className
      )}
    >
      <div className="w-full flex-col flex justify-between items-start bg-inherit flow-row">
        <img
          src={icon}
          alt="icon"
          className="w-[32px] bg-inherit mb-3 h-[32px]"
        />
        <div className="bg-inherit flex justify-center w-full items-start flex-col">
          <h2 className="text-[12px] text-[#25313E] font-semibold bg-inherit font-DMSans">
            {title}
          </h2>
          <div className="flex bg-white mt-3 justify-between items-center w-full">
            <p className="bg-inherit text-[12px] font-semibold font-DMSans text-[#8F94A8]">
              {gty}
            </p>
            <button className="text-[#415BE6] font-DMSans text-[12px] font-semibold">
              Edit
            </button>
          </div>
        </div>
      </div>

      {children && (
        <div
          className={cn("border-t bg-inherit  border-t-themeGrey/20 py-2.5")}
        >
          {children}
        </div>
      )}
    </div>
  );
};
