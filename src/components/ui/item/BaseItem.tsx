export interface DashboardCardProps {
  icon: string;
  title: string;
  qty: number;
  status: string;
  from: string;
  to: string;
}

export const BaseItem = (props: DashboardCardProps) => {
  const { icon, qty, status, title, from, to } = props;

  // const currencyFormatter = new Intl.NumberFormat("en-NG", {
  //   style: "currency",
  //   currency: "NGN",
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0,
  // });

  return (
    <div className="w-full border-[2px] flex flex-row justify-between bg-white items-center border-[#E6E6E8] h-auto my-[4px] rounded-[8px] p-[10px]">
      <div className="bg-white flex flex-row justify-start items-center">
        {icon ? (
          <img src={icon} className="bg-white w-[52px] h-[52px] rounded-md" />
        ) : (
          <p className="bg-white">No Image</p>
        )}
        <div className="bg-white flex ml-2 flex-col justify-between h-full items-start">
          <p className="bg-white text-[14px] font-bold font-DMSans text-[#25313E] ">
            {title}
          </p>
          <div className="bg-white flex flex-row justify-start items-center">
            <p className="bg-white mr-2 font-DMSans font-normal text-[#8F94A8] text-[13px]">
              {qty} baskets
            </p>
            <p className="bg-white mr-2 font-DMSans font-semibold text-[#435060] text-[13px]">
              ₦50,000
            </p>
          </div>
          <div className="bg-white flex flex-row justify-between items-center">
            <p className="bg-white mr-2 font-DMSans font-normal text-[#8F94A8] text-[13px]">
              From: {from}
            </p>
            <p className="bg-white font-DMSans font-normal text-[#8F94A8] text-[13px]">
              To: {to}
            </p>
          </div>
        </div>
      </div>
      {status === "delivered" && (
        <p className="rounded-[4px] w-[70px] flex justify-center items-center text-[12px] text-[#00A45F] font-DMSans font-semibold px-[10px] py-2 bg-themeGreen/10">
          Delivered
        </p>
      )}
      {status === "Cancelled" && (
        <p className="rounded-[4px] w-[70px] flex justify-center items-center text-[12px] text-[#CD266C] font-DMSans font-semibold px-[10px] py-2 bg-[#CD266C1A]/10">
          Cancelled
        </p>
      )}
      {status === "Pending" && (
        <p className="rounded-[4px] w-[70px] flex justify-center items-center text-[12px] text-[#415BE6] font-DMSans font-semibold px-[10px] py-2 bg-[#415BE61A]/10">
          Pending
        </p>
      )}
    </div>
  );
};
