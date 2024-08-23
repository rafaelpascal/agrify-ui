import { useState } from "react";
import { cn } from "../../utils/helpers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Checkbox from "../ui/data_inputs/check-box";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../ui/avatar";
import { MarchantEditModal } from "../ui/modals/MarchantEditModal";

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

interface ProductView {
  id: string | boolean | undefined;
  status: boolean;
}
export const BaseTable = ({
  // showPagination = false,
  headers,
  headersClassName,
  tableRows,
}: IBaseTable) => {
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();
  const [Isactionmodal, setIsactionmodal] = useState<number | boolean>(false);
  const [isEditProduct, setIsEditProduct] = useState<ProductView>({
    id: "",
    status: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableRows.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [checkedRows, setCheckedRows] = useState<boolean[]>(
    new Array(tableRows.length).fill(false)
  );

  const handleHeaderCheckboxChange = (checked: boolean) => {
    setIsHeaderChecked(checked);
    setCheckedRows(new Array(tableRows.length).fill(checked));
  };

  const handleRowCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedRows = [...checkedRows];
    newCheckedRows[index] = checked;
    setCheckedRows(newCheckedRows);
    setIsHeaderChecked(newCheckedRows.every((item) => item));
  };
  const handleOpenaccount = (userId: string | boolean | undefined) => {
    console.log(userId);
    setIsactionmodal(false);
    navigate("/users/account");
  };

  const handleclose = () => {
    setIsEditProduct({
      id: "",
      status: false,
    });
  };
  function handleTableRowAppend(
    row: string | Record<string, string | boolean | undefined>,
    rowIndex: number
  ) {
    if (typeof row === "string") {
      return row;
    } else {
      if (row.isStatus === true && row.statusText) {
        return (
          <div className="bg-themeGreen/10 text-themeGreen  flex justify-center items-center w-[70px] rounded-[4px] px-[10px] py-1">
            {row.statusText}
          </div>
        );
      } else if (row.isStatus === false && row.statusText) {
        return (
          <div className="bg-[#CD266C]/10 text-[#CD266C] flex justify-center items-center w-[90px] rounded-[4px] px-[10px] py-1">
            {row.statusText}
          </div>
        );
      } else if (row.action === true && row.userId) {
        return (
          <div className="relative bg-white">
            <button
              onClick={() =>
                setIsactionmodal(Isactionmodal === rowIndex ? false : rowIndex)
              }
              className="bg-white flex justify-center items-center"
            >
              <HiOutlineDotsHorizontal className="w-[30px] bg-white text-[#8F94A8] h-[30px]" />
            </button>
            {Isactionmodal === rowIndex && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: Isactionmodal === rowIndex ? 1 : 0,
                  y: Isactionmodal === rowIndex ? 0 : -20,
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute w-[93px] flex flex-col justify-between items-start p-[10px] h-auto rounded-[4px] shadow-lg z-20 top-8 left-0 right-0 bg-white"
              >
                <button
                  onClick={() => handleOpenaccount(row.userId)}
                  className="text-[12px] font-normal py-1 font-DMSans text-[#25313E] hover:bg-themeGreen/10 w-full text-left p-2 rounded-[4px]"
                >
                  View
                </button>
                <button
                  className="text-[12px] font-normal py-1 font-DMSans text-[#25313E] hover:bg-themeGreen/10 w-full text-left p-2 rounded-[4px]"
                  onClick={() =>
                    setIsEditProduct({
                      id: row.userId,
                      status: true,
                    })
                  }
                >
                  Edit
                </button>
                <button className="text-[12px] font-normal py-1 font-DMSans text-[#25313E] hover:bg-themeGreen/10 w-full text-left p-2 rounded-[4px]">
                  Deactivate
                </button>
              </motion.div>
            )}
          </div>
        );
      } else if (row.hascheck === true && row.haspicture === true) {
        return (
          <div className="flex justify-start gap-2 w-[50%] bg-white items-center">
            <Checkbox
              label="Name"
              bgClass="bg-white"
              initialChecked={checkedRows[rowIndex]}
              onChange={(checked) => handleRowCheckboxChange(rowIndex, checked)}
            />
            <Avatar
              img={row?.img?.toString() || ""}
              name={row.name!.toString()}
              avatarClassName="h-10 w-14"
              textClassName="none hidden"
              avatarTextContainerClassName="w-full"
              wrapperClassName="bg-white"
              rounded={false}
            >
              <p className="text-[12px] font-DMSans font-bold text-[#435060] w-[100%]/2 bg-white">
                {row.name!.toString()}
              </p>
            </Avatar>
          </div>
        );
      } else if (row.hascheck === true && row.haspicture === false) {
        return (
          <Checkbox
            label="Name"
            bgClass="bg-white"
            initialChecked={checkedRows[rowIndex]}
            onChange={(checked) => handleRowCheckboxChange(rowIndex, checked)}
          >
            <p className="text-[12px] font-DMSans font-bold text-[#435060] w-full bg-white">
              {row.name!.toString()}
            </p>
          </Checkbox>
        );
      } else if (row.hascheck === false) {
        return (
          <p className="text-[12px] font-DMSans font-bold text-[#435060] w-full bg-white">
            {row.name!.toString()}
          </p>
        );
      }
    }
  }

  return (
    <div className="bg-white">
      <div className="w-full bg-white overflow-x-auto">
        <table className="table bg-white w-full">
          <thead className="bg-white">
            <tr
              className={cn(
                "text-md border-b bg-white border-b-themeGrey/20 font-light text-themeText",
                headersClassName
              )}
            >
              {headers.map((headr: string, idx: number) => (
                <th
                  key={idx}
                  className="bg-[#E6E8EF] text-[12px] w-[13%] text-[#435060] font-bold font-DMSans"
                >
                  {headr === "Name" || headr === "Product Detail" ? (
                    <Checkbox
                      label=""
                      bgClass="bg-[#E6E8EF]"
                      initialChecked={isHeaderChecked}
                      onChange={handleHeaderCheckboxChange}
                    >
                      <p className="bg-[#E6E8EF] w-full text-[12px] font-DMSans font-bold text-[#435060]">
                        {headr}
                      </p>
                    </Checkbox>
                  ) : (
                    <p className="bg-[#E6E8EF] w-full text-[12px] font-DMSans font-bold text-[#435060]">
                      {headr}
                    </p>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentItems.map(
              (
                row: (string | Record<string, string | boolean | undefined>)[],
                idx: number
              ) => (
                <tr
                  key={idx}
                  className="border-b rounded-md mb-3 bg-white border-b-themeGrey/20 "
                >
                  {row.map((item, _i) => (
                    <td
                      key={_i}
                      className="bg-white text-[12px] text-[#435060] font-normal"
                    >
                      {handleTableRowAppend(item, indexOfFirstItem + idx)}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between bg-white px-3">
        <div className="font-semibold bg-white">Page {currentPage}</div>
        <div className="mt-4 flex items-end justify-end gap-10 bg-white">
          <button
            className="rounded-lg bg-themeGreen/5 p-3 bg-white"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft fontSize={24} className="bg-white" />
          </button>
          <button
            className="rounded-lg bg-themeGreen/5 p-3 bg-white"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= tableRows.length}
          >
            <FaChevronRight fontSize={24} className="bg-white" />
          </button>
        </div>
      </div>
      <MarchantEditModal
        userId={isEditProduct.id}
        isOpen={isEditProduct.status}
        closeModal={handleclose}
      />
    </div>
  );
};
