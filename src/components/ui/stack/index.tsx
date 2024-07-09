import { HTMLAttributes } from "react";
import { cn } from "../../../utils/helpers";

interface StackProps extends HTMLAttributes<HTMLDivElement> {}

export const YStack = (props: StackProps) => {
  return (
    <div {...props} className={cn("flex flex-col gap-4", props.className)} />
  );
};

export const XStack = (props: StackProps) => {
  return <div {...props} className={cn("flex gap-4", props.className)} />;
};
