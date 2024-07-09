import { Search } from "react-huge-icons/solid";
import { cn } from "../../../utils/helpers";

export const SearchBar = ({
  value,
  onChange,
  className,
}: IClass & {
  iconClassName?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div
      className={cn(
        "flex w-full bg-white max-w-[220px] items-center gap-4 rounded-md border border-themeGrey/20 p-3  focus-within:border-main",
        className
      )}
    >
      <Search fontSize={20} className="bg-white" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full bg-white text-sm outline-none placeholder:text-themeText/50"
        placeholder="Search"
        name="search"
      />
    </div>
  );
};
