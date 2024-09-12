import { useState } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { ProductsTable } from "../components/table/ProductsTable";
import { cassava } from "../assets";
import { TiPlus } from "react-icons/ti";
import { ArrowDropDown, Search } from "react-huge-icons/outline";
import { RiDropdownList } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";

const transactionTableHeaders = [
  "Product Detail",
  "Category",
  "Price per unit",
  "Stock Price",
  "Seller",
  "Qty Added",
  "Qty Left",
  "Action",
];

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

const Products = () => {
  const [searchQuery] = useState("");
  const [filteredTableRows] = useState<IBaseTable["tableRows"]>([]);
  const [transactionsMockTableRows] = useState([
    [
      { hascheck: true, img: cassava, haspicture: true, name: "Cassava" },
      { isCategory: true, statusText: "Tuber" },
      "₦900",
      "₦122,900",
      { isName: true, statusText: "Musa. A" },
      "2500 pcs",
      "25 pcs",
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, img: cassava, haspicture: true, name: "Cassava" },
      { isCategory: true, statusText: "Tuber" },
      "₦900",
      "₦122,900",
      { isName: true, statusText: "Musa. A" },
      "2500 pcs",
      "25 pcs",
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, img: cassava, haspicture: true, name: "Cassava" },
      { isCategory: true, statusText: "Tuber" },
      "₦900",
      "₦122,900",
      { isName: true, statusText: "Musa. A" },
      "2500 pcs",
      "25 pcs",
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, img: cassava, haspicture: true, name: "Cassava" },
      { isCategory: true, statusText: "Tuber" },
      "₦900",
      "₦122,900",
      { isName: true, statusText: "Musa. A" },
      "2500 pcs",
      "25 pcs",
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
    [
      { hascheck: true, img: cassava, haspicture: true, name: "Cassava" },
      { isCategory: true, statusText: "Tuber" },
      "₦900",
      "₦122,900",
      { isName: true, statusText: "Musa. A" },
      "2500 pcs",
      "25 pcs",
      { action: true, userId: "dhjduyweywueweiwewe8we92" },
    ],
  ]);
  const [isMarchantTable, setIsMarchantTable] = useState(true);

  const handleShowMarchant = () => {
    setIsMarchantTable(true);
  };

  return (
    <DashboardArea title={`Raphael`}>
      <h2 className="text-[14px] px-4 mb-4 font-semibold font-DMSans text-[#8F94A8]">
        Products
      </h2>
      <div className="rounded-[12px] mb-3 w-full flex gap-2 flex-row justify-between items-center px-3 py-1">
        <button
          onClick={handleShowMarchant}
          className={`text-[14px] h-[39px] w-[145px] bg-[#00A45F] font-semibold font-DMSans rounded-[8px] relative overflow-hidden ${
            isMarchantTable ? "text-[#435060]" : "text-[#AFAEBC]"
          }`}
        >
          <span className="relative flex justify-between items-center px-3 bg-inherit">
            <TiPlus className="bg-transparent text-[#fff]" />
            <p className="bg-transparent text-[#fff] text-[12px]">
              Add New Product
            </p>
          </span>
        </button>
        <div className="flex justify-between items-center">
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
      <div className="h-auto bg-white p-3 rounded-[12px]">
        {isMarchantTable && (
          <ProductsTable
            tableRows={
              searchQuery ? filteredTableRows : transactionsMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        )}
      </div>
    </DashboardArea>
  );
};

export default Products;
