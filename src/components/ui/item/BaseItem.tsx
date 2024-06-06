import { cn } from "../../../utils/helpers";

export interface DashboardCardProps {
  icon: string;
  title: string;
  qty: string;
  status: boolean;
  value: number;
}

export const BaseItem = (props: DashboardCardProps) => {
  const { icon, qty, status, title, value } = props;

  return (
    <div
      className={cn("rounded-lg border-[1px] w-full my-2 border-[#343434] p-2")}
    >
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex justify-start gap-4 items-center">
          <img src={icon} alt="icon" className="w-[40px] h-[40px] rounded-md" />
          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="text-[14px] font-bold font-DMSans">{title}</h2>
            <div className="flex gap-4 justify-center items-center">
              <h2 className="text-[13px] text-[#8F94A8] font-semibold font-DMSans">
                {qty}
              </h2>
              {status === false ? (
                <h2 className="text-[12px] bg-[#D48B1F]/10 p-[4px] rounded-sm font-semibold font-DMSans text-[#D48B1F]">
                  Pending
                </h2>
              ) : (
                <h2 className="text-[12px] bg-[#00A45F]/10 p-[4px] text-[#00A45F] rounded-sm font-semibold font-DMSans">
                  sold
                </h2>
              )}
            </div>
          </div>
        </div>
        <h2 className="text-[16px] font-bold font-DMSans">{value}</h2>
      </div>
    </div>
  );
};
