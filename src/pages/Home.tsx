import { useState } from "react";
import { LineChartDemo } from "../components/charts/line-chart";
import { DoughnutChartDemo } from "../components/charts/Doughnut";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { DashboardCardProps } from "../components/ui/dashboard-card";
import { HomeTable } from "../components/table/HomeTable";
import { BaseItem } from "../components/ui/item/BaseItem";
import { cassava, revenue, customer, orders, delivery } from "../assets";

const transactionTableHeaders = [
  "Item",
  "Category",
  "Price",
  "Date Added",
  "Seller",
  "Qty Left",
  "Status",
];

interface IBaseTable {
  showPagination?: boolean;
  headers: string[];
  headersClassName?: string;
  tableRows: (string | Record<string, string | boolean | undefined>)[][];
}

type ViewItem = {
  icon: string;
  title: string;
  qty: number;
  status: string;
  from: string;
  to: string;
  amount: number;
};

const Home = () => {
  const [filteredTableRows] = useState<IBaseTable["tableRows"]>([]);
  const [items] = useState<ViewItem[]>([
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "Pending",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "Pending",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "Pending",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "delivered",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "delivered",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "Cancelled",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "delivered",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: cassava,
      title: "Tomatoes",
      qty: 3,
      status: "Cancelled",
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
  ]);
  const [searchQuery] = useState("");
  const [dashboardHeroCards] = useState<DashboardCardProps[]>([
    {
      icon: revenue,
      title: "Total Revenue",
      value: 0,
    },
    {
      icon: customer,
      title: "Total Customers",
      value: 3000,
    },
    {
      icon: orders,
      title: "Total Order",
      value: 0,
    },
    {
      icon: delivery,
      title: "Pending Delivery",
      value: 0,
    },
  ]);
  const [transactionsMockTableRows] = useState([
    [
      "Yam",
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      "Maize",
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
    [
      "Yam",
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      "Maize",
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
    [
      "Yam",
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      "Maize",
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
    [
      "Yam",
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      "Maize",
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
    [
      "Yam",
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      "Maize",
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
    [
      "Yam",
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      "Maize",
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
  ]);

  return (
    <DashboardArea title={`Raphael`}>
      <div className="w-full">
        <DashboardCardRow dashboardHeroCards={dashboardHeroCards} />
      </div>
      <div className="flex flex-col sm:flex-row w-full h-full my-4 justify-between gap-3 items-center">
        <div className="w-full lg:w-[50%] bg-white rounded-lg">
          <LineChartDemo />
        </div>
        <div className="w-full lg:w-[50%] bg-white rounded-lg">
          <DoughnutChartDemo />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="bg-white p-4 w-full mb-4 lg:mb-0 lg:w-[59%] h-[398px] rounded-lg">
          <div className="bg-white flex mb-5 flex-row justify-between items-center">
            <div className="bg-white">
              <h2 className="bg-white text-[14px] text-[#343434] font-bold font-DMSans">
                Stock Report
              </h2>
              <p className="bg-white text-[14px] text-[#8F94A8] font-normal font-DMSans">
                Total 2,305 items in the stock
              </p>
            </div>
            <button className="w-auto p-[10px] rounded-[4px] text-[12px] font-semibold font-DMSans bg-[#F5F6FB]">
              View Stock
            </button>
          </div>
          <HomeTable
            tableRows={
              searchQuery ? filteredTableRows : transactionsMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        </div>
        <div className="bg-white w-full lg:w-[40%] h-[398px] p-4 rounded-lg">
          <div className="bg-white flex mb-5 flex-row justify-between items-center">
            <div className="bg-white">
              <h2 className="bg-white text-[14px] text-[#343434] font-bold font-DMSans">
                Product Delivery
              </h2>
              <p className="bg-white text-[14px] text-[#8F94A8] font-normal font-DMSans">
                200 orders delivered so far
              </p>
            </div>
            <button className="w-auto p-[10px] rounded-[4px] text-[12px] font-semibold font-DMSans text-[#435060] bg-[#F5F6FB]">
              More Details
            </button>
          </div>
          <div className="h-[280px] rounded-[4px] overflow-y-auto bg-white">
            {items.map((item, index) => (
              <BaseItem
                key={index}
                icon={item.icon}
                title={item.title}
                qty={item.qty}
                status={item.status}
                from={item.from}
                to={item.to}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardArea>
  );
};

export default Home;
