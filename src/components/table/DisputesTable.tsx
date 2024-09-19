import { useState } from "react";
import { cn } from "../../utils/helpers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Checkbox from "../ui/data_inputs/check-box";
import { useNavigate } from "react-router-dom";

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

export const DisputesTable = ({
  // showPagination = false,
  headers,
  headersClassName,
  tableRows,
}: IBaseTable) => {
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();
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

  const handleViewDispute = (
    row: (string | Record<string, string | boolean | undefined>)[]
  ) => {
    if (
      typeof row[0] === "object" &&
      row[0] !== null &&
      "disputeId" in row[0]
    ) {
      const disputeId = row[0].disputeId as string;
      console.log(disputeId);
      navigate(`/disputes/${disputeId}`, { state: { row } });
    } else {
      console.error("disputeId is not available or row[0] is not an object");
    }
  };

  function handleTableRowAppend(
    row: string | Record<string, string | boolean | undefined>,
    rowIndex: number
  ) {
    if (typeof row === "string") {
      return row;
    } else {
      if (row.statusText === "Settled") {
        return (
          <div className="text-themeGreen w-[77px] rounded-[4px] font-DMSans text-[11px] flex justify-center items-center py-[4px] bg-themeGreen/10">
            {row.statusText}
          </div>
        );
      } else if (row.statusText === "Ongoing") {
        return (
          <div className="bg-[#D48B1F]/10 text-[#D48B1F] w-[77px] font-DMSans text-[11px] rounded-[4px] flex justify-center items-center py-[4px]">
            {row.statusText}
          </div>
        );
      } else if (row.hascheck === true) {
        return (
          <Checkbox
            label="Name"
            bgClass="bg-white"
            initialChecked={checkedRows[rowIndex]}
            onChange={(checked) => handleRowCheckboxChange(rowIndex, checked)}
          >
            <p className="text-[12px] font-DMSans font-bold text-[#435060] w-full bg-white">
              {row.disputeId!.toString()}
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
                  {headr === "Case Number" ? (
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
                  onClick={() => handleViewDispute(row)}
                  key={idx}
                  className="border-b cursor-pointer rounded-md mb-3 bg-white border-b-themeGrey/20 "
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
    </div>
  );
};
