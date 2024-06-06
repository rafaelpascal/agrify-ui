import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../utils/helpers";

interface IBaseModal extends IChildren, IModalPropsType {
  isOpen: boolean;
  closeModal: () => void;
}

export const BaseModal = ({ children, isOpen, closeModal }: IBaseModal) => {
  const tooltipRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef?.current &&
        event.target instanceof Node &&
        !tooltipRef.current?.contains(event.target)
      ) {
        closeModal();
        document.body.style.overflow = "auto";
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [closeModal, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed shadow-lg bottom-0 left-0 right-0 top-0 z-[9999] flex h-full min-h-screen w-full items-center justify-center overflow-y-auto"
        >
          <div
            ref={tooltipRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "mb-32 h-auto bg-themeWhite max-h-[540px] w-[26%] overflow-y-auto rounded-[20px] px-4 shadow-md [@media(max-width:1200px)]:w-[50%] [@media(max-width:700px)]:w-[90%] "
            )}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
