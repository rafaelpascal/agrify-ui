import { cn } from "../../../utils/helpers";

export interface DashboardCardProps {
  icon: string;
  title: string;
  value: number;
  children?: React.ReactNode;
  childrenClassName?: string;
  className?: string;
}

export const DashboardCard = (props: DashboardCardProps) => {
  const { children, icon, title, value, className } = props;

  return (
    <div
      className={cn(
        "rounded-r-[8px] bg-themeWhite px-[22px] flex justify-between gap-4 items-start flex-col py-[12px] h-full",
        className
      )}
    >
      <div className="w-full flex justify-between items-center bg-inherit flow-row">
        <div className="bg-inherit flex justify-center items-start flex-col">
          <h2 className="text-[12px] font-semibold bg-inherit font-DMSans">
            {title}
          </h2>
          <p className="bg-inherit text-[12px] font-semibold font-DMSans text-[#8F94A8]">
            Last 30 days
          </p>
        </div>
        <img src={icon} alt="icon" className="w-[24px] bg-inherit  h-[24px]" />
      </div>
      <h2 className="text-[14px] bg-inherit  font-bold font-DMSans">{value}</h2>
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
