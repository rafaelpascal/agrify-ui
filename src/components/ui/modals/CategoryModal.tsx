import { BaseModal } from "./BaseModal";
import { BaseButton } from "../../ui/button/BaseButton";
import { Remove } from "react-huge-icons/outline";
import { useState } from "react";

export const CategoryModal = ({
  userId,
  isOpen,
  closeModal,
}: IModalPropsType) => {
  const [formData, setFormData] = useState({
    categoryName: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <BaseModal userId={userId} isOpen={isOpen} closeModal={closeModal}>
      <div className="flex flex-col bg-white justify-between">
        <div className="flex bg-themeWhite w-full  items-center justify-center">
          <div className="flex items-center bg-[#00A45F]/10 justify-center px-4 py-3 w-full">
            <h2 className="bg-transparent text-[#00A45F] font-bold font-DMSans text-[16px] w-full text-left">
              Add New Category
            </h2>
            <button className="bg-transparent" onClick={closeModal}>
              <Remove
                className="text-[20px] bg-transparent"
                onClick={closeModal}
              />
            </button>
          </div>
        </div>
        <div className="bg-themeWhite m-12 flex flex-col h-auto items-center justify-center gap-3">
          <div className="mt-1 w-full bg-inherit">
            <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
              Category Name
            </h2>
            <div
              className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                formData.categoryName !== ""
                  ? "border-[#00A45F]"
                  : "border-[#ddd]"
              }`}
            >
              <input
                type="text"
                className="w-full h-full bg-inherit font-DMSans outline-none text-[#8F94A8] text-[12px]"
                placeholder="Category Name"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <BaseButton
            containerCLassName="w-full h-auto gap-2 rounded-[4px] bg-themeGreen sm:h-[46px] text-[#fff] rounded-lg [@media(max-width:800px)]:p-3 p-4"
            hoverScale={1.01}
            hoverOpacity={0.8}
            tapScale={0.9}
            onClick={closeModal}
          >
            <span className="text-[12px] font-DMSans font-semibold text-[#fff] bg-themeGreen">
              Save
            </span>
          </BaseButton>
        </div>
      </div>
    </BaseModal>
  );
};
