import React, { MouseEventHandler, ReactElement } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/helpers";

type BaseButtonProps = {
  children: ReactElement<React.JSX.Element>;
  containerCLassName?: string;
  onClick?: MouseEventHandler;
  hoverScale?: number;
  hoverOpacity?: number;
  tapScale?: number;
  disabled?: boolean;
};
export const BaseButton = ({
  children,
  containerCLassName,
  onClick,
  hoverScale = 1.1,
  hoverOpacity = 0.9,
  tapScale = 0.8,
  disabled = false,
}: BaseButtonProps) => {
  const handleClick: MouseEventHandler = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        opacity: hoverOpacity,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: tapScale, borderRadius: "15px" }}
      className={cn(
        "flex h-[45px] cursor-pointer select-none items-center justify-center p-[10px]  text-center text-themeText",
        containerCLassName,
        { "cursor-not-allowed opacity-50": disabled }
      )}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
};
