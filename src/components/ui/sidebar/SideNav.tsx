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
      "relative flex flex-col items-center p-4",
      isActive && "bg-main/5 font-medium text-themeGreen",
      isActive &&
        "before:absolute before:left-0 before:h-full before:w-[3px] before:rounded-md before:bg-main"
    );

    if (typeof className === "string") return cn(baseStyles, className);

    return cn(baseStyles, className?.({ isActive }));
  };

  return (
    <NavLink to={href} className={style}>
      <Icon width={24} height={24} className={cn("")} />
      <span className="text-[12px] font-bold font-DMSans">{text}</span>
    </NavLink>
  );
};
