import { BaseModal } from "./BaseModal";
import { Remove, WarningPolygon } from "react-huge-icons/outline";
import { useEffect, useState } from "react";
import { potato } from "../../../assets";

export const ProductDetails = ({
  userId,
  isOpen,
  closeModal,
}: IModalPropsType) => {
  const [formData] = useState({
    productName: "",
    stock: "",
    dateAdded: "",
    unitprice: "",
    stockprice: "",
    picture: null as File | null,
  });

  useEffect(() => {
    console.log(userId);
  }, []);

  return (
    <BaseModal userId={userId} isOpen={isOpen} closeModal={closeModal}>
      <div className="h-full">
        <div className="flex flex-col bg-themeWhite w-full h-full  items-center justify-center">
          <div className="flex items-center bg-[#00A45F]/10 justify-center px-4 py-3 w-full">
            <h2 className="bg-transparent text-[#00A45F] font-bold font-DMSans text-[16px] w-full text-left">
              Product Details
            </h2>
            <button className="bg-transparent" onClick={closeModal}>
              <Remove
                className="text-[20px] bg-transparent"
                onClick={closeModal}
              />
            </button>
          </div>
          <div className="w-full h-full overflow-y-auto bg-white lg:w-[380px] my-6">
            <div className="flex p-4 flex-col lg:flex-row  justify-start items-start bg-white">
              <div className="bg-white mb-2 lg:mb-0 rounded-[20px] w-full flex justify-center items-center lg:w-[91.97px] mr-4">
                <img
                  src={potato}
                  alt="potato"
                  className="lg:w-full h-full w-[60%] rounded-[20px] lg:m-0"
                />
              </div>
              <div className="w-full lg:w-[234px] p-2 rounded-[8px] bg-[#F5F6FB] h-[111px]">
                <ul className="flex flex-col justify-between w-full items-center">
                  <li className="flex justify-between w-full mb-2 items-center">
                    <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                      Product Category:
                    </p>
                    <p className="text-[#00A45F] font-DMSans font-bold text-[11px]">
                      Fruits
                    </p>
                  </li>
                  <li className="flex justify-between w-full mb-2 items-center">
                    <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                      Product Name:
                    </p>
                    <p className="text-[#25313E] font-DMSans font-bold text-[11px]">
                      Strawberry
                    </p>
                  </li>
                  <li className="flex justify-between mb-2 w-full items-center">
                    <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                      Total Stock
                    </p>
                    <p className="text-[#25313E] font-DMSans font-bold text-[11px]">
                      2500 baskets
                    </p>
                  </li>
                  <li className="flex justify-between mb-2 w-full items-center">
                    <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                      Date Added:
                    </p>
                    <p className="text-[#25313E] font-DMSans font-bold text-[11px]">
                      25/04/2024
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-2 rounded-[8px] bg-[#F5F6FB] h-[111px]">
              <ul className="flex flex-col justify-between w-full items-center">
                <li className="flex justify-between w-full mb-2 items-center">
                  <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                    Amount Sold
                  </p>
                  <p className="text-[#00A45F] font-DMSans font-bold text-[11px]">
                    2500 baskets
                  </p>
                </li>
                <li className="flex justify-between w-full mb-2 items-center">
                  <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                    Amount Left
                  </p>
                  <p className="text-[#25313E] font-DMSans font-bold text-[11px]">
                    0 baskets
                  </p>
                </li>
                <li className="flex justify-between mb-2 w-full items-center">
                  <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                    Price per unit:
                  </p>
                  <p className="text-[#25313E] font-DMSans font-bold text-[11px]">
                    ₦700
                  </p>
                </li>
                <li className="flex justify-between mb-2 w-full items-center">
                  <p className="text-[#435060] font-DMSans font-normal text-[11px]">
                    Price:
                  </p>
                  <p className="text-[#25313E] font-DMSans font-bold text-[11px]">
                    ₦18,700
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {formData.stockprice === "" ? (
          <div className="p-4 bg-white bottom-10 z-10 flex h-auto items-center justify-center gap-3">
            <div className="w-full h-auto rounded-[10px] flex justify-center items-center bg-[#A41E000D]/5 sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3">
              <WarningPolygon color="#A41E00" />
              <span className="text-[12px] ml-2 text-center font-semibold bg-transparent text-[#A41E00]">
                You have no stock Left, Restock!
              </span>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-white bottom-10 z-10 flex h-auto items-center justify-center gap-3">
            <div className="w-full h-auto rounded-[10px] flex justify-center items-center bg-[#00A45F1A]/5 sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3">
              <WarningPolygon color="#00A45F" />
              <span className="text-[12px] ml-2 text-center font-semibold bg-transparent text-[#00A45F]">
                You have 25 baskets Left.
              </span>
            </div>
          </div>
        )}
      </div>
    </BaseModal>
  );
};
