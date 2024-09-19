import { Apps } from "react-huge-icons/outline";
import { cn } from "../../../utils/helpers";
import { NavLink } from "react-router-dom";

type ActiveClass = { isActive: boolean };

type ClassName = (style: ActiveClass) => string;

export interface SideNavProps {
  icon: typeof Apps;
  text: string;
  href: string;
  textStyles?: string;
  className?: ClassName | string;
}

export const SideNav = (props: SideNavProps) => {
  const { icon: Icon, href, text, className } = props;

  const style = ({ isActive }: ActiveClass) => {
    const baseStyles = cn(
      "relative flex flex-row items-center text-[#435060] gap-4 p-3 bg-themeWhite",
      isActive && "rounded-[8px] bg-themeGreen/5 text-[#00A45F] text-themeGreen"
    );

    if (typeof className === "string") return cn(baseStyles, className);

    return cn(baseStyles, className?.({ isActive }));
  };

  return (
    <>
      <NavLink to={href} className={style}>
        <Icon width={24} height={24} className={cn("bg-transparent")} />
        <span className="text-[12px] bg-transparent font-bold font-DMSans">
          {text}
        </span>
      </NavLink>
    </>
  );
};
