import { useState } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { BaseTable } from "../components/table/BaseTable";
import { motion } from "framer-motion";

const transactionTableHeaders = [
  "Name",
  "Email address",
  "Phone number",
  "Date joined",
  "Location",
  "Status",
  "Action",
];

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

const Users = () => {
  const [searchQuery] = useState("");
  const [filteredTableRows] = useState<IBaseTable["tableRows"]>([]);
  const [marchant] = useState("140");
  const [shoppera] = useState("2000");
  const [transactionsMockTableRows] = useState([
    [
      { hascheck: true, name: "Musa Ahmed" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "",
      "08164493471",
      "30 Mar, 2024",
      "Abuja ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kano ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "",
      "08164493471",
      "30 Mar, 2024",
      "Anambra ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Enugu ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);
  const [shoppersMockTableRows] = useState([
    [
      { hascheck: true, name: "Musa Ahmed" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kaduna ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "",
      "08164493471",
      "30 Mar, 2024",
      "Abuja ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "Musaa@email.com",
      "08164493471",
      "30 Mar, 2024",
      "Kano ",
      { isStatus: true, statusText: "Active" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, name: "Imran Moha" },
      "",
      "08164493471",
      "30 Mar, 2024",
      "Anambra ",
      { isStatus: false, statusText: "Inactive" },
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);
  const [isMarchantTable, setIsMarchantTable] = useState(true);
  const [isShoppersTable, setIsShoppersTable] = useState(false);

  const handleShowMarchant = () => {
    setIsMarchantTable(true);
    setIsShoppersTable(false);
  };

  const handleShowShoppers = () => {
    setIsShoppersTable(true);
    setIsMarchantTable(false);
  };

  return (
    <DashboardArea title={`Welcome Raphael`}>
      <h2 className="mb-4">Users</h2>
      <div className="h-auto bg-white p-3 rounded-[12px]">
        <div className="rounded-[12px] mb-3 w-[25%] h-[39px] flex gap-2 flex-row justify-between items-center px-3 py-1">
          <button
            onClick={handleShowMarchant}
            className={`text-[14px] h-[28px] font-semibold font-DMSans w-[50%] rounded-[8px] relative overflow-hidden ${
              isMarchantTable ? "text-[#435060]" : "text-[#AFAEBC]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isMarchantTable ? 1 : 0 }}
              transition={{ duration: 1 }} // duration in seconds
              className={`absolute inset-0 ${
                isMarchantTable ? "bg-white" : "bg-transparent"
              }`}
            />
            <span className="relative z-10 bg-inherit">
              Merchants ({marchant})
            </span>
          </button>

          <button
            onClick={handleShowShoppers}
            className={`text-[14px] h-[28px] font-semibold font-DMSans w-[50%] rounded-[8px] relative overflow-hidden ${
              isShoppersTable ? "text-[#435060]" : "text-[#AFAEBC]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isShoppersTable ? 1 : 0 }}
              transition={{ duration: 1 }} // duration in seconds
              className={`absolute inset-0 ${
                isShoppersTable ? "bg-white" : "bg-transparent"
              }`}
            />
            <span className="relative z-10 bg-inherit">
              Shoppers ({shoppera})
            </span>
          </button>
        </div>
        {isMarchantTable && (
          <BaseTable
            tableRows={
              searchQuery ? filteredTableRows : transactionsMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
        {isShoppersTable && (
          <BaseTable
            tableRows={searchQuery ? filteredTableRows : shoppersMockTableRows}
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
      </div>
    </DashboardArea>
  );
};

export default Users;
