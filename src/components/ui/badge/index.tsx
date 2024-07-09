import { cn } from "../../../utils/helpers";
import { XStack } from "../stack";

interface BadgeProps {
  children?: React.ReactNode;
  text: SN;
  className?: string;
  status: BadgeStatus;
}

export const Badge = (props: BadgeProps) => {
  const { children, text, className, status } = props;
  console.log(status);

  const getClassColor = () => {
    switch (status) {
      case "perma":
        return "bg-[#7152F31A] text-[#7152F3]";
      case "negative":
        return "bg-[#F45B69] text-[#F45B69]";
      case "neutral":
        return "bg-themeGrey text-themeGrey bg-opacity-20";
      case "positive":
        return "bg-option-1 text-option-1 ";
      case "caution":
        return "bg-[#EFBE121A] text-[#EFBE12] ";
    }
  };

  return (
    <XStack
      className={cn(
        "flex w-1/2 items-center justify-center rounded-md bg-opacity-10 p-1 text-xs",
        getClassColor(),
        className
      )}
    >
      {children}
      {text}
    </XStack>
  );
};
