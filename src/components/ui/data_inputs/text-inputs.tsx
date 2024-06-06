// @ts-ignore
import { CSSProperties, InputHTMLAttributes, useState } from "react";
import { cn } from "../../../utils/helpers";

interface BaseInputProps {
  label?: string;
  placeholder?: string;
  containerClassname?: string;
  inputContainerStyle?: CSSProperties;
  type?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  showValidTick?: boolean;
  error?: string;
  readonly?: boolean;
}

export const BaseInput = ({
  label,
  placeholder,
  containerClassname,
  type,
  inputContainerClassName,
  inputClassName,
  labelClassName,
  showValidTick,
  error,
  readOnly,
  ...props
}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={cn(
        "w-full outline-none focus:outline-none",
        containerClassname
      )}
    >
      {label && (
        <h1
          dangerouslySetInnerHTML={{ __html: label }}
          className={cn(
            "text-blackColor font-darkerGrotesque-bold mb-2  text-left text-[28px] font-medium leading-[25px]",
            labelClassName
          )}
        ></h1>
      )}

      <div
        style={{ opacity: readOnly ? ".5" : 1 }}
        className={cn(
          "relative flex w-full flex-row items-center justify-between gap-1 rounded-xl",
          readOnly ? "opacity-[.5]" : "opacity-[1]",
          inputContainerClassName
        )}
      >
        <input
          autoComplete="True"
          type={type}
          className={cn(
            "h-14 w-full cursor-pointer rounded-[10px] border-[1px] border-solid border-themeGrey/20 bg-transparent py-3 text-left text-sm font-light text-themeText placeholder-themeGrey outline-none focus:outline-none",
            inputClassName
          )}
          placeholder={placeholder}
          readOnly={readOnly}
          {...props}
        />
      </div>
    </div>
  );
};
