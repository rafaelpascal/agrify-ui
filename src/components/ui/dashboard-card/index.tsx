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
      className={cn("rounded-lg border-[1px] border-[#343434] p-2", className)}
    >
      <div className="w-full flex flex-col justify-center">
        <img src={icon} alt="icon" className="w-[47px] h-[47px]" />
        <h2 className="text-[12px] font-semibold font-DMSans mt-2">{title}</h2>
      </div>
      <h2 className="text-[14px] font-bold font-DMSans">{value}</h2>
      {children && (
        <div
          className={cn(
            "border-t border-t-themeGrey/20 py-2.5",
            props.childrenClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
