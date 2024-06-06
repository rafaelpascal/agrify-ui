// import { useState } from "react";
import { BaseModal } from "./BaseModal";
import { BaseButton } from "../../ui/button/BaseButton";
import { agrifymodal } from "../../../assets";
import { motion } from "framer-motion";

export const Accountexist = ({
  userId,
  isOpen,
  closeModal,
}: IModalPropsType) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <BaseModal userId={userId} isOpen={isOpen} closeModal={closeModal}>
      <>
        <div className="flex bg-themeWhite w-full  items-center justify-center">
          <div className="flex flex-col items-center justify-center py-6 lg:w-[336px]">
            <motion.img
              src={agrifymodal}
              alt=""
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 6 }}
              className="mb-4 w-[50%]"
            />
            <h2 className="pb-4 text-center text-[16px] font-DMSans font-semibold">
              Account not created
            </h2>
            <p className="pb-4 text-center text-[14px]">{userId}</p>
          </div>
        </div>
        <div className="sticky bg-themeWhite bottom-10 z-10 mt-4 flex h-auto items-center justify-center gap-3">
          <BaseButton
            containerCLassName="w-full h-auto gap-2 rounded-[10px] bg-themeGreen sm:h-[46px] text-[#fff] rounded-lg [@media(max-width:800px)]:p-3 p-4"
            hoverScale={1.01}
            hoverOpacity={0.8}
            tapScale={0.9}
            onClick={closeModal}
          >
            <span className="text-[16px] text-[#fff]">Close</span>
          </BaseButton>
        </div>
      </>
    </BaseModal>
  );
};
