import React, { useState, useRef } from "react";

interface OTPInputProps {
  length: number;
  isTimeout: boolean;
  onChange: (otp: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length,
  onChange,
  isTimeout,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(""));

      if (value && index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="w-full flex justify-between items-center">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          disabled={isTimeout}
          ref={(el) => (inputsRef.current[index] = el!)}
          className="w-[46px] h-[46px] text-center text-[1.5rem] mr-[0.5rem] border-[1px] border-themeGrey  rounded-full"
        />
      ))}
    </div>
  );
};
