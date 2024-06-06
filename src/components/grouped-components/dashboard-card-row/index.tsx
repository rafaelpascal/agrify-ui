import { useState } from "react";
import {
  DashboardCard,
  DashboardCardProps,
} from "../../../components/ui/dashboard-card";
import { cn } from "../../../utils/helpers";
import { stock, sales, product } from "../../../assets";

export const DashboardCardRow = () => {
  const [dashboardHeroCards, setDashboardHeroCards] = useState<
    DashboardCardProps[]
  >([
    {
      icon: product,
      title: "Total Product",
      value: 2000,
    },
    {
      icon: sales,
      title: "Total Sales",
      value: 3000,
    },
    {
      icon: stock,
      title: "Stock Left",
      value: 4000,
    },
  ]);

  return (
    <div className={cn("relative w-full")}>
      <div
        className={cn(
          "hide-scrollbar flex grid-cols-2 gap-2 overflow-auto sm:grid"
        )}
      >
        {dashboardHeroCards.map((n) => (
          <DashboardCard
            key={n.title}
            {...n}
            childrenClassName="text-themeGrey px-4 text-sm"
            className="flex-1 max-sm:min-w-[110px] h-auto bg-[#FDF9F4]"
          />
        ))}
      </div>
    </div>
  );
};
