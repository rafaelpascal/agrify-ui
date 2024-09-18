import { useState } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { stock, sales, product } from "../assets";
import { DashboardCardProps } from "../components/ui/dashboard-card";
import { motion } from "framer-motion";
import { UsersTable } from "../components/table/UsersTable";

const transactionTableHeaders = [
  "Item",
  "Category",
  "Price",
  "Date Added",
  "Seller",
  "Qty Left",
  "Status",
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
  const [transactionsMockTableRows] = useState([
    [
      { hascheck: true, haspicture: false, name: "Musa Ahmed" },
      "Musaaa@email.com",
      "08164193471",
      "30 Mar, 2024",
      "Kaduna State",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imra Moha" },
      "",
      "08164293471",
      "31 Mar, 2024",
      "Abuja",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imran Moha" },
      "Musaa@email.com",
      "08164393471",
      "32 Mar, 2024",
      "Kano",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrann Moha" },
      "",
      "08164493471",
      "33 Mar, 2024",
      "Anambra 1",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imren Moha" },
      "",
      "08164593471",
      "34 Mar, 2024",
      "Kaduna Village",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrdan Moha" },
      "Musaac@email.com",
      "08164693471",
      "35 Mar, 2024",
      "Enugu",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrfan Moha" },
      "",
      "08164793471",
      "36 Mar, 2024",
      "Kaduna",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrcan Moha" },
      "Musaad@email.com",
      "08164893471",
      "37 Mar, 2024",
      "Kaduna Town",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrayn Moha" },
      "Musaae@email.com",
      "08164993471",
      "38 Mar, 2024",
      "Abia",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrhan Moha" },
      "Musaaf@email.com",
      "08164093471",
      "39 Mar, 2024",
      "Ebonyi ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);
  const [shoppersMockTableRows] = useState([
    [
      { hascheck: true, haspicture: false, name: "Musa Ahmed" },
      "Musaa1@email.com",
      "08164113471",
      "40 Mar, 2024",
      "Benue ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrann Moha" },
      "",
      "08164123471",
      "41 Mar, 2024",
      "Abuja ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imramn Moha" },
      "Musaa2@email.com",
      "08164133471",
      "42 Mar, 2024",
      "Kano ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, haspicture: false, name: "Imrban Moha" },
      "",
      "08164143471",
      "43 Mar, 2024",
      "Anambra State",
      { isStatus: false, statusText: "Inactive" },
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
      icon: product,
      title: "Total Product",
      value: 0,
    },
    {
      icon: sales,
      title: "Total Sales",
      value: 3000,
    },
    {
      icon: stock,
      title: "Stock Left",
      value: 0,
    },
    {
      icon: stock,
      title: "Stock Left",
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
      <div className="h-auto mt-4 bg-white p-3 rounded-[12px]">
        <div className="rounded-[12px] bg-[#F5F6FA] mb-3 w-[550px] h-[39px] flex gap-2 flex-row justify-between items-center px-3 py-1">
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
                  isFailed ? "text-[#435060]" : "bg-transparent text-[#AFAEBC]"
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
        {isAllOrders && (
          <UsersTable
            tableRows={
              searchQuery ? filteredTableRows : transactionsMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isActuveOrders && (
          <UsersTable
            tableRows={searchQuery ? filteredTableRows : shoppersMockTableRows}
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isDelivered && (
          <UsersTable
            tableRows={searchQuery ? filteredTableRows : shoppersMockTableRows}
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isFailed && (
          <UsersTable
            tableRows={searchQuery ? filteredTableRows : shoppersMockTableRows}
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
      </div>
    </DashboardArea>
  );
};

export default Orders;
