import React, { useState, useEffect } from "react";

interface CheckInputProps {
  label: string;
  children?: React.ReactNode;
  initialChecked: boolean;
  bgClass: string;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckInputProps> = ({
  label,
  children,
  bgClass,
  initialChecked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  useEffect(() => {
    if (label === "Name") {
      setIsChecked(initialChecked);
    }
  }, [initialChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label
      className={`flex flex-row justify-start items-center gap-2 ${bgClass}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {children}
    </label>
  );
};

export default Checkbox;
