import { useState } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { DashboardCardProps } from "../components/ui/dashboard-card";
import { motion } from "framer-motion";
import { AllOrdersTable } from "../components/table/AllOrdersTable";
import { ArrowDropDown, Search } from "react-huge-icons/outline";
import { allOrder, pendingOrder, deliveredOrder, failedOrder } from "../assets";

const transactionTableHeaders = [
  "Order No",
  "Product",
  "Customer",
  "Quantity",
  "Price",
  "Seller",
  "Date created",
  "Delivery date",
  "Status",
  "Action",
];

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

const Orders = () => {
  const [filteredTableRows] = useState<IBaseTable["tableRows"]>([]);
  const [allOrders] = useState("140");
  const [active] = useState("15");
  const [delivered] = useState("6");
  const [failed] = useState("2");
  const [allOrderMockTableRows] = useState([
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Delivered" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Pending" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);

  const [activeOrderMockTableRows] = useState([
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Pending" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Pending" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);

  const [deliveredOrderMockTableRows] = useState([
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Delivered" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Delivered" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);

  const [failedOrderMockTableRows] = useState([
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Failed" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, OrderNo: "001273" },
      "Cassava",
      "Sandra O",
      "3 baskets",
      "₦50,000",
      "Musa. A",
      "01/Apr/2024",
      "01/Apr/2024",
      { statusText: "Failed" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);
  const [isAllOrders, setIsAllOrders] = useState(true);
  const [isActuveOrders, setIsActuveOrders] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [searchQuery] = useState("");
  const [dashboardHeroCards] = useState<DashboardCardProps[]>([
    {
      icon: allOrder,
      title: "Total Orders",
      value: 0,
    },
    {
      icon: deliveredOrder,
      title: "Completed Orders",
      value: 3000,
    },
    {
      icon: failedOrder,
      title: "Failed Orders",
      value: 0,
    },
    {
      icon: pendingOrder,
      title: "Pending Delivery",
      value: 0,
    },
  ]);

  const handleShowMarchant = () => {
    setIsActuveOrders(false);
    setIsFailed(false);
    setIsDelivered(false);
    setIsAllOrders(true);
  };

  const handleShowShoppers = () => {
    setIsAllOrders(false);
    setIsDelivered(false);
    setIsFailed(false);
    setIsActuveOrders(true);
  };

  const handleShowDelivered = () => {
    setIsActuveOrders(false);
    setIsAllOrders(false);
    setIsFailed(false);
    setIsDelivered(true);
  };

  const handleShowIsFailed = () => {
    setIsActuveOrders(false);
    setIsAllOrders(false);
    setIsDelivered(false);
    setIsFailed(true);
  };

  return (
    <DashboardArea title={`Raphael`}>
      <div className="w-full">
        <DashboardCardRow dashboardHeroCards={dashboardHeroCards} />
      </div>
      <div className="h-auto mt-4 p-3 rounded-[12px]">
        <div className="flex justify-between mb-4 items-center py-2 px-3 rounded-[8px] bg-white">
          <div className="rounded-[12px] bg-[#F5F6FA] w-[550px] h-[39px] flex gap-2 flex-row justify-between items-center px-3 py-1">
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
                  All Orders
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
                  Active
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
                  Delivered
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
            <button
              onClick={handleShowIsFailed}
              className={`text-[14px] h-[28px] font-semibold font-DMSans w-auto px-2 rounded-[8px] relative overflow-hidden ${
                isFailed ? "text-[#435060]" : "text-[#AFAEBC]"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isFailed ? 1 : 0 }}
                transition={{ duration: 1 }} // duration in seconds
                className={`absolute inset-0 ${
                  isFailed ? "bg-white" : "bg-transparent"
                }`}
              />
              <span className="relative z-10 bg-inherit">
                <span
                  className={`w-[25px] h-[16px] bg-transparent text-[14px] font-bold font-DMSans rounded-[8px] py-1 ${
                    isFailed
                      ? "text-[#435060]"
                      : "bg-transparent text-[#AFAEBC]"
                  }`}
                >
                  Failed
                </span>
                <span
                  className={`w-[25px] h-[16px] ml-2 text-[12px] font-bold font-DMSans px-2 rounded-[8px] py-1 ${
                    isFailed
                      ? "bg-[#00A45F] text-[#fff]"
                      : "bg-[#E6E6E8] text-[#fff]"
                  }`}
                >
                  {failed}
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
          <AllOrdersTable
            tableRows={searchQuery ? filteredTableRows : allOrderMockTableRows}
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isActuveOrders && (
          <AllOrdersTable
            tableRows={
              searchQuery ? filteredTableRows : activeOrderMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isDelivered && (
          <AllOrdersTable
            tableRows={
              searchQuery ? filteredTableRows : deliveredOrderMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isFailed && (
          <AllOrdersTable
            tableRows={
              searchQuery ? filteredTableRows : failedOrderMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
      </div>
    </DashboardArea>
  );
};

export default Orders;
