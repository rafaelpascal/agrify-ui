import { useState } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { DashboardCardProps } from "../components/ui/dashboard-card";
import { motion } from "framer-motion";
import { DisputesTable } from "../components/table/DisputesTable";
import { ArrowDropDown, Search } from "react-huge-icons/outline";
import { allOrder, deliveredOrder, failedOrder } from "../assets";

const transactionTableHeaders = [
  "Case Number",
  "Title",
  "Agent",
  "Customer",
  "Seller",
  "Date Created",
  "Date closed",
  "Status",
];

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

const Disputes = () => {
  const [filteredTableRows] = useState<IBaseTable["tableRows"]>([]);
  const [allOrders] = useState("140");
  const [active] = useState("15");
  const [delivered] = useState("6");
  const [allOrderMockTableRows] = useState([
    [
      { hascheck: true, disputeId: "001273" },
      "Cassava",
      "Sandra O",
      "Onyeka E",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Settled" },
    ],
    [
      { hascheck: true, disputeId: "001273" },
      "Cassava",
      "Sandra O",
      "Onyeka E",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Ongoing" },
    ],
  ]);

  const [activeOrderMockTableRows] = useState([
    [
      { hascheck: true, disputeId: "001273" },
      "Cassava",
      "Sandra O",
      "Onyeka E",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Settled" },
    ],
    [
      { hascheck: true, disputeId: "001273" },
      "Cassava",
      "Sandra O",
      "Onyeka E",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Settled" },
    ],
  ]);

  const [deliveredOrderMockTableRows] = useState([
    [
      { hascheck: true, disputeId: "001273" },
      "Cassava",
      "Sandra O",
      "Onyeka E",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Ongoing" },
    ],
    [
      { hascheck: true, disputeId: "001273" },
      "Cassava",
      "Sandra O",
      "Onyeka E",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Ongoing" },
    ],
  ]);
  const [isAllOrders, setIsAllOrders] = useState(true);
  const [isActuveOrders, setIsActuveOrders] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [searchQuery] = useState("");
  const [dashboardHeroCards] = useState<DashboardCardProps[]>([
    {
      icon: allOrder,
      title: "Total Disputes",
      value: 0,
    },
    {
      icon: deliveredOrder,
      title: "Settled Disputes",
      value: 3000,
    },
    {
      icon: failedOrder,
      title: "On-going Dispute",
      value: 0,
    },
  ]);

  const handleShowMarchant = () => {
    setIsActuveOrders(false);
    setIsDelivered(false);
    setIsAllOrders(true);
  };

  const handleShowShoppers = () => {
    setIsAllOrders(false);
    setIsDelivered(false);
    setIsActuveOrders(true);
  };

  const handleShowDelivered = () => {
    setIsActuveOrders(false);
    setIsAllOrders(false);
    setIsDelivered(true);
  };

  return (
    <DashboardArea title={`Raphael`}>
      <h2 className="text-[14px] px-4 mb-4 font-semibold font-DMSans text-[#8F94A8]">
        Disputes
      </h2>
      <div className="w-full">
        <DashboardCardRow dashboardHeroCards={dashboardHeroCards} />
      </div>
      <div className="h-auto mt-4 p-3 rounded-[12px]">
        <div className="flex justify-between mb-4 items-center py-2 px-3 rounded-[8px] bg-white">
          <div className="rounded-[12px] bg-[#F5F6FA] w-[444px] h-[39px] flex gap-2 flex-row justify-between items-center px-3 py-1">
            <button
              onClick={handleShowMarchant}
              className={`text-[14px] h-[28px] font-semibold font-DMSans w-auto px-2 rounded-[8px] relative overflow-hidden ${
                isAllOrders ? "text-[#435060]" : "text-[#AFAEBC]"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isAllOrders ? 1 : 0 }}
                transition={{ duration: 1 }} // duration in seconds
                className={`absolute inset-0 ${
                  isAllOrders ? "bg-white" : "bg-[transparent]"
                }`}
              />
              <span className="relative z-10 bg-inherit">
                <span
                  className={`w-[25px] h-[16px] bg-transparent text-[14px] font-bold font-DMSans rounded-[8px] py-1 ${
                    isAllOrders
                      ? "text-[#435060]"
                      : "bg-transparent text-[#AFAEBC]"
                  }`}
                >
                  All Disputes
                </span>
                <span
                  className={`w-[25px] h-[16px] ml-2 text-[12px] font-bold font-DMSans px-2 rounded-[8px] py-1 ${
                    isAllOrders
                      ? "bg-[#00A45F] text-[#fff]"
                      : "bg-[#E6E6E8] text-[#fff]"
                  }`}
                >
                  {allOrders}
                </span>
              </span>
            </button>
            <button
              onClick={handleShowShoppers}
              className={`text-[14px] h-[28px] font-semibold font-DMSans w-auto px-2 rounded-[8px] relative overflow-hidden ${
                isActuveOrders ? "text-[#435060]" : "text-[#AFAEBC]"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isActuveOrders ? 1 : 0 }}
                transition={{ duration: 1 }} // duration in seconds
                className={`absolute inset-0 ${
                  isActuveOrders ? "bg-white" : "bg-transparent"
                }`}
              />
              <span className="relative z-10 bg-inherit">
                <span
                  className={`w-[25px] h-[16px] bg-transparent text-[14px] font-bold font-DMSans rounded-[8px] py-1 ${
                    isActuveOrders
                      ? "text-[#435060]"
                      : "bg-transparent text-[#AFAEBC]"
                  }`}
                >
                  Settled
                </span>
                <span
                  className={`w-[25px] h-[16px] ml-2 text-[12px] font-bold font-DMSans px-2 rounded-[8px] py-1 ${
                    isActuveOrders
                      ? "bg-[#00A45F] text-[#fff]"
                      : "bg-[#E6E6E8] text-[#fff]"
                  }`}
                >
                  {active}
                </span>
              </span>
            </button>
            <button
              onClick={handleShowDelivered}
              className={`text-[14px] h-[28px] font-semibold font-DMSans w-auto px-2 rounded-[8px] relative overflow-hidden ${
                isDelivered ? "text-[#435060]" : "text-[#AFAEBC]"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isDelivered ? 1 : 0 }}
                transition={{ duration: 1 }} // duration in seconds
                className={`absolute inset-0 ${
                  isDelivered ? "bg-white" : "bg-transparent"
                }`}
              />
              <span className="relative z-10 bg-inherit">
                <span
                  className={`w-[25px] h-[16px] bg-transparent text-[14px] font-bold font-DMSans rounded-[8px] py-1 ${
                    isDelivered
                      ? "text-[#435060]"
                      : "bg-transparent text-[#AFAEBC]"
                  }`}
                >
                  On-going
                </span>
                <span
                  className={`w-[25px] h-[16px] ml-2 text-[12px] font-bold font-DMSans px-2 rounded-[8px] py-1 ${
                    isDelivered
                      ? "bg-[#00A45F] text-[#fff]"
                      : "bg-[#E6E6E8] text-[#fff]"
                  }`}
                >
                  {delivered}
                </span>
              </span>
            </button>
          </div>

          <div className="flex bg-white justify-between items-center">
            <div className="bg-white w-full px-2 flex justify-between items-center lg:w-[206px] h-[39px] rounded-[8px] border-[1px] border-[#E6E6E8]">
              <Search className="bg-white mr-3 text-[#000] text-[20px]" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-full h-auto text-[#000] text-[13px] placeholder:text-[#000] font-semibold bg-white outline-none "
              />
            </div>
            <div className="bg-white w-full px-2 flex justify-center items-center lg:w-[112px] ml-4 h-[39px] rounded-[8px] border-[1px] border-[#E6E6E8]">
              <button className="text-[#000] text-[13px] ml-2 font-semibold">
                Sort by
              </button>
              <ArrowDropDown className="bg-white text-[#000] mr-3 text-[20px]" />
            </div>
          </div>
        </div>

        {isAllOrders && (
          <DisputesTable
            tableRows={searchQuery ? filteredTableRows : allOrderMockTableRows}
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isActuveOrders && (
          <DisputesTable
            tableRows={
              searchQuery ? filteredTableRows : activeOrderMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isDelivered && (
          <DisputesTable
            tableRows={
              searchQuery ? filteredTableRows : deliveredOrderMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
      </div>
    </DashboardArea>
  );
};

export default Disputes;
