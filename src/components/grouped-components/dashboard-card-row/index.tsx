import {
  DashboardCard,
  DashboardCardProps,
} from "../../../components/ui/dashboard-card";
import { cn } from "../../../utils/helpers";

interface DashboardCardRowProps {
  dashboardHeroCards: DashboardCardProps[];
}

export const DashboardCardRow: React.FC<DashboardCardRowProps> = ({
  dashboardHeroCards,
}) => {
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
