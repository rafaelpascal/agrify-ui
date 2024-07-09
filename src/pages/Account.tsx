import { backIcon, farmer, money, copy } from "../assets";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import UserCards from "../components/ui/layout/cards/UserCards";
import { useState } from "react";

function Account() {
  const [items] = useState([
    {
      Icon: money,
      title: "Total Product",
      value: 2000,
    },
    {
      Icon: money,
      title: "Total Product",
      value: 2000,
    },
    {
      Icon: money,
      title: "Total Product",
      value: 2000,
    },
    {
      Icon: money,
      title: "Total Product",
      value: 2000,
    },
  ]);

  return (
    <DashboardArea title={`Welcome Raphael`}>
      <div className="flex flex-row justify-start items-start gap-3">
        <span>Users</span>
        <span>Marchant's Details </span>
      </div>
      <div className="mt-4">
        <button className="w-[77px] h-auto bg-themeGreen/10 flex justify-center items-center rounded-[8px] px-2 py-1">
          <img src={backIcon} className="bg-transparent text-themeGreen mr-1" />
          <p className="bg-transparent text-themeGreen text-[14px] font-semibold ml-1">
            Back
          </p>
        </button>
      </div>
      <div className="w-full mt-6 flex flex-row justify-between items-center">
        <div className="w-[40%] py-[27px] px-[22px] border-[1px] border-[#E6E8EF] bg-themeWhite h-[219px] rounded-[12px] flex justify-between items-center ">
          <img src={farmer} />
          <div className="bg-themeWhite flex flex-col justify-start items-start h-full ml-3">
            <h1 className="bg-themeWhite text-[24px] font-bold font-DMSans #435060">
              Mohammed Musa
            </h1>
            <div className="bg-themeWhite h-full flex flex-row justify-between items-center">
              <div className="bg-themeWhite flex h-full flex-col justify-start items-start">
                <span className="bg-themeWhite py-1 text-right text-[12px] font-normal font-DMSans text-[#8F94A8]">
                  Email address
                </span>
                <span className="bg-themeWhite py-1 text-[12px] font-normal font-DMSans text-[#8F94A8]">
                  Phone number
                </span>
                <span className="bg-themeWhite py-1 text-[12px] font-normal font-DMSans text-[#8F94A8]">
                  Date Joined
                </span>
                <span className="bg-themeWhite py-1 text-[12px] font-normal font-DMSans text-[#8F94A8]">
                  Location
                </span>
                <span className="bg-themeWhite py-1 text-[12px] font-normal font-DMSans text-[#8F94A8]">
                  Status
                </span>
              </div>
              <div className="bg-themeWhite flex h-full flex-col justify-start items-start">
                <span className="bg-themeWhite  py-1 text-[12px] font-semibold ml-1 font-DMSans text-[#435060]">
                  musamhed@email.com
                </span>
                <span className="bg-themeWhite  py-1 text-[12px] font-semibold ml-1 font-DMSans text-[#435060]">
                  +2348164493471
                </span>
                <span className="bg-themeWhite  py-1 text-[12px] font-semibold ml-1 font-DMSans text-[#435060]">
                  01/ April/ 2024
                </span>
                <span className="bg-themeWhite  py-1 text-[12px] font-semibold ml-1 font-DMSans text-[#435060]">
                  Suleja, Niger
                </span>
                <span className="bg-[#415BE6]/10 px-2 rounded-[4px] text-[#415BE6]  py-1 text-[12px] font-semibold ml-1 font-DMSans">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] h-[219px]">
          <div className="flex flex-row justify-between items-start">
            {items.map((item) => (
              <UserCards
                Icon={item.Icon}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
          <div className="bg-themeGreen/10 flex flex-row justify-between items-center w-full h-auto rounded-[4px] py-[10px] px-[17px] mt-2">
            <div className="w-[60%] bg-transparent flex flex-row justify-between items-center ">
              <div className="bg-transparent">
                <p className="bg-transparent text-[10px] font-normal text-themeGreen font-DMSans">
                  Account name
                </p>
                <h2 className="bg-transparent text-[10px] font-semibold text-themeGreen font-DMSans">
                  Muhammed Musa
                </h2>
              </div>
              <div className="bg-transparent">
                <p className="bg-transparent text-[10px] font-normal text-themeGreen font-DMSans">
                  Account name
                </p>
                <h2 className="bg-transparent text-[10px]  font-semibold text-themeGreen font-DMSans">
                  Muhammed Musa
                </h2>
              </div>
              <div className="bg-transparent">
                <p className="bg-transparent text-[10px] font-normal text-themeGreen font-DMSans">
                  Account name
                </p>
                <h2 className="bg-transparent text-[10px]  font-semibold text-themeGreen font-DMSans">
                  Muhammed Musa
                </h2>
              </div>
            </div>
            <div className="bg-transparent">
              <button className="w-[64px] h-auto border-[1px] flex flow-row justify-between items-center px-2 py-1 border-themeGreen bg-themeWhite rounded-[4px]">
                <p className="bg-transparent text-themeGreen font-normal text-[10px] font-DMSans">
                  Copy
                </p>
                <img src={copy} className="bg-transparent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardArea>
  );
}

export default Account;
