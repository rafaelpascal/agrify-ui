import { useEffect } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { useLocation, useParams } from "react-router-dom";
import { backIcon } from "../assets";

const DisputePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const row = location.state?.row;

  useEffect(() => {
    console.log("GGGGGGGGGGGG", id, row);
  }, [id]);

  return (
    <DashboardArea title={`Raphael`}>
      <h2 className="text-[14px] px-4 mb-4 font-semibold font-DMSans text-[#8F94A8]">
        DisputePage
      </h2>
      <div className="my-4 px-4">
        <button className="w-[77px] h-auto bg-themeGreen/10 flex justify-center items-center rounded-[8px] px-2 py-1">
          <img src={backIcon} className="bg-transparent text-themeGreen mr-1" />
          <p className="bg-transparent text-themeGreen text-[14px] font-semibold ml-1">
            Back
          </p>
        </button>
      </div>
      <div className="bg-white p-5 w-full rounded-[12px]">
        <div className="w-full bg-white flex justify-between items-center h-[26px]">
          <h2 className="text-[16px] bg-white font-bold font-DMSans text-[#343434]">
            Case Number: #001273
          </h2>
          <h2 className="w-[77px] h-[26px] bg-[#00A45F1A]/10 flex justify-center text-[14px] font-normal font-DMSans items-center rounded-[4px] text-[#00A45F]">
            Settled
          </h2>
        </div>
        <div className="w-full mt-3 bg-white flex justify-between items-center h-[26px]">
          <div className="w-[254px] flex justify-center items-center h-[31px] rounded-[4px] bg-[#F5F6FB]">
            <h2 className="text-[12px] bg-transparent font-normal font-DMSans text-[#8F94A8]">
              Title:{" "}
              <span className="text-[#000] font-semibold">
                {row[1]} | {row[5]} | 08:25AM
              </span>
            </h2>
          </div>
          <div className="w-[449px] flex justify-center items-center h-[31px] rounded-[4px] bg-[#F5F6FB]">
            <h2 className="text-[12px] border-r-[2px] px-2 border-[#000000] bg-transparent font-normal font-DMSans text-[#8F94A8]">
              Agent: <span className="text-[#000] font-semibold">{row[2]}</span>
            </h2>
            <h2 className="text-[12px] border-r-[2px] px-2 border-[#000000] bg-transparent font-normal font-DMSans text-[#8F94A8]">
              Customer:{" "}
              <span className="text-[#000] font-semibold">{row[3]}</span>
            </h2>
            <h2 className="text-[12px] px-2 bg-transparent font-normal font-DMSans text-[#8F94A8]">
              Seller:{" "}
              <span className="text-[#000] font-semibold">{row[4]}</span>
            </h2>
          </div>
        </div>
        <div className="h-[523px] p-4 rounded-[12px] w-full mt-3 overflow-y-auto">
          {/* Chat sender */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header text-[12px] font-semibold font-DMSans text-[#8F94A8]">
              Omoba Dhabs
              <time className="text-xs ml-2 text-[12px] font-bold font-DMSans text-[#000] opacity-50">
                08:25AM
              </time>
            </div>
            <div className="chat-bubble w-full lg:w-[319px] bg-[#E6E6E8]">
              <h2 className="text-[12px] bg-transparent font-DMSans font-normal text-[#435060] text-left">
                Hi, my name is Isaac Adeyemi, i bought 3 basket of tomatoes form
                your platform only 2 baskets where delivered and I am yet to
                receiev the 3rd basket, what could be the problem?
              </h2>
            </div>
            <div className="chat-footer opacity-50 ">
              {" "}
              <p className="text-[12px] font-semibold font-DMSans text-[#8F94A8]">
                01/Apr/2024
              </p>
            </div>
          </div>
          {/* Reply chat */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header text-[12px] font-semibold font-DMSans text-[#8F94A8]">
              Emehelu Raphael
              <time className="text-xs ml-2 text-[12px] font-bold font-DMSans text-[#000] opacity-50">
                08:25AM
              </time>
            </div>
            <div className="chat-bubble  w-full lg:w-[319px] bg-[#00A45F]">
              <h2 className="text-[12px] bg-transparent font-DMSans font-normal text-[#F5F6FB] text-left">
                Please can you send me the order number for that transaction, so
                wee can track it and find out what happened? So sorry for the
                inconvenience
              </h2>
            </div>
            <div className="chat-footer opacity-50 ">
              {" "}
              <p className="text-[12px] font-semibold font-DMSans text-[#8F94A8]">
                Seen at 12:46
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardArea>
  );
};

export default DisputePage;
