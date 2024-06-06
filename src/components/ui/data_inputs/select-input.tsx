import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

type OptionType = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: OptionType[];
  onChange?: (selectedOption: OptionType | null) => void;
};

export const SelectInput: React.FC<DropdownProps> = ({ options, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (option: OptionType) => {
    if (onChange) {
      onChange(option);
    }
    // setIsOpen(false);
    setSearchTerm(option.label);
  };

  return (
    <div ref={dropdownRef} className="relative w-full p-10 bg-white shadow-lg">
      <ul className="absolute p-[4px] right-0 left-0 top-0 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-auto z-10">
        <div className=" border-[1px] rounded-md px-2 border-gray-300 flex justify-center items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full p-[2px] outline-none focus:outline-none"
          />
          <span className="text-[12px] text-[#999999] font-DMSans flex justify-center items-center gap-2 ">
            <p>search</p> <BsSearch className="text-[20px]" />
          </span>
        </div>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-2 text-[12px] h-[56px] flex justify-start items-center text-[#343434] focus:bg-[#F9F9F9] active::text-[12px] active:font-bold font-DMSans cursor-pointer hover:bg-gray-200"
            >
              {option.label}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No options found</li>
        )}
      </ul>
    </div>
  );
};
