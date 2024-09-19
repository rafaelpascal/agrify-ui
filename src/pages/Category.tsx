import { TiPlus } from "react-icons/ti";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { NewCategoryCard } from "../components/ui/layout/cards/CategoryCard";
import { DashboardCardProps } from "../components/ui/category-card";
import { useState } from "react";
import { category } from "../assets";
import { CategoryModal } from "../components/ui/modals/CategoryModal";

const Category = () => {
  const [IsNewCategory, setIsNewCategory] = useState(false);
  const [dashboardHeroCards] = useState<DashboardCardProps[]>([
    {
      icon: category,
      title: "Tuber Crop",
      gty: "4 products",
    },
    {
      icon: category,
      title: "Grain Crop",
      gty: "14 products",
    },
    {
      icon: category,
      title: "Fruit Crop",
      gty: "40 products",
    },
    {
      icon: category,
      title: "Vegetables",
      gty: "42 products",
    },
    {
      icon: category,
      title: "Tuber Crop",
      gty: "24 products",
    },
    {
      icon: category,
      title: "Grain Crop",
      gty: "94 products",
    },
    {
      icon: category,
      title: "Fruit Crop",
      gty: "44 products",
    },
    {
      icon: category,
      title: "Vegetables",
      gty: "54 products",
    },
  ]);

  const handleclose = () => {
    setIsNewCategory(false);
  };

  return (
    <DashboardArea title={`Raphael`}>
      <h2 className="text-[14px] px-4 mb-4 font-semibold font-DMSans text-[#8F94A8]">
        Category
      </h2>
      <div className="w-full h-[39px] flex justify-between items-center">
        <h2 className="text-[14px] px-4 mb-4 font-semibold font-DMSans text-[#435060] ">
          List of created categories
        </h2>
        <button
          onClick={() => setIsNewCategory(!IsNewCategory)}
          className={`text-[14px] h-[39px] bg-[#00A45F] font-semibold font-DMSans rounded-[8px] relative overflow-hidden`}
        >
          <span className="relative flex justify-between items-center px-3 bg-inherit">
            <TiPlus className="bg-transparent text-[#fff]" />
            <p className="bg-transparent ml-2 text-[#fff] text-[12px]">
              Add New Category
            </p>
          </span>
        </button>
      </div>
      <div className="w-full mt-6">
        <NewCategoryCard dashboardHeroCards={dashboardHeroCards} />
      </div>
      <CategoryModal
        userId="jhgghfghhryuff"
        isOpen={IsNewCategory}
        closeModal={handleclose}
      />
    </DashboardArea>
  );
};

export default Category;
