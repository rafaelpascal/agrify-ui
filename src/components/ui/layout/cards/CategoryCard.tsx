import { CategoryCard, DashboardCardProps } from "../../category-card";
import { cn } from "../../../../utils/helpers";

interface DashboardCardRowProps {
  dashboardHeroCards: DashboardCardProps[];
}

export const NewCategoryCard: React.FC<DashboardCardRowProps> = ({
  dashboardHeroCards,
}) => {
  return (
    <div className={cn("relative rounded-[8px] h-full w-full")}>
      <div
        className={cn(
          "grid lg:grid-cols-4 grid-cols-2 rounded-[8px] justify-between w-full h-full gap-2 overflow-y-auto"
        )}
      >
        {dashboardHeroCards.map((n) => (
          <CategoryCard
            key={n.title}
            {...n}
            childrenClassName="text-themeGrey bg-white px-4 text-sm"
            className="flex-1 bg-white max-sm:min-w-[180px] h-[135px]"
          />
        ))}
      </div>
    </div>
  );
};
