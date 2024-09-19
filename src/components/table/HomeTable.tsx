import { useState } from "react";
import { cn } from "../../utils/helpers";

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

export const HomeTable = ({
  // showPagination = false,
  headers,
  headersClassName,
  tableRows,
}: IBaseTable) => {
  const [itemsPerPage] = useState(5);
  const [currentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableRows.slice(indexOfFirstItem, indexOfLastItem);

  function handleTableRowAppend(
    row: string | Record<string, string | boolean | undefined>
  ) {
    if (typeof row === "string") {
      return row;
    } else {
      if (row.isStatus === true && row.statusText) {
        return (
          <div className="bg-[#415BE61A]/10 text-[#415BE6] flex justify-center items-center w-[58px] rounded-[4px] text-[10px] font-DMSans font-semibold py-1">
            {row.statusText}
          </div>
        );
      } else if (row.isStatus === false && row.statusText) {
        return (
          <div className="bg-[#CD266C1A]/10 text-[#CD266C] w-[58px] flex justify-center items-center rounded-[4px] text-[10px] font-DMSans font-semibold py-1">
            {row.statusText}
          </div>
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
                  <p className="bg-[#E6E8EF] w-full text-[12px] font-DMSans font-bold text-[#435060]">
                    {headr}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white overflow-y-auto">
            {currentItems.map(
              (
                row: (string | Record<string, string | boolean | undefined>)[]
              ) => (
                <tr className="border-b rounded-md mb-3 bg-white border-b-themeGrey/20 ">
                  {row.map((item, _i) => (
                    <td
                      key={_i}
                      className="bg-white text-[12px] text-[#435060] font-normal"
                    >
                      {handleTableRowAppend(item)}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
