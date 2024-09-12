import { useState } from "react";
import { LineChartDemo } from "../components/charts/line-chart";
import { DoughnutChartDemo } from "../components/charts/Doughnut";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { stock, sales, product } from "../assets";
import { DashboardCardProps } from "../components/ui/dashboard-card";
import { BaseTable } from "../components/table/BaseTable";
import { BaseItem } from "../components/ui/item/BaseItem";

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
  status: boolean;
  from: string;
  to: string;
  amount: number;
};

const Home = () => {
  const [filteredTableRows] = useState<IBaseTable["tableRows"]>([]);
  const [items] = useState<ViewItem[]>([
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: false,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: false,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: false,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: true,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: true,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: false,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: true,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
    {
      icon: "https://s3-alpha-sig.figma.com/img/fe81/f559/28eca25e236811323f4593a35d3ce42c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syl0C-EfHp0~cSsLMeCSsJgSUz~cUGATaNoHLTvEImc1M1Lg4blAeNE73azHrv~jpqGhbih5gZscIOiDREdtsHrvdf54OpXuyWE8mh5kcUi9wLa1MasZdIUqHfQuwVB8fu22hXANtBrlHO~WUR5EOxfueOrzm2i56NYwkAeIvCj54--SRVVXnNFFiz3NUmJFOrDqcwJomVo1gjmmuhx1h9eFFMYLPm4GUxY8zCNxc7g3AsTYPAgr8UilSxkVQdm4f6hdbdyjV6RzI7vNGLPvfdEc2kmk14P7J5xv4jWSQsuurSRA61G2VLJJji8veZ8TG~8nmKKCDmGhClvlFCRFZw__",
      title: "Tomatoes",
      qty: 3,
      status: false,
      from: "Mustapha A",
      to: "John  Ben",
      amount: 50000,
    },
  ]);
  const [searchQuery] = useState("");
  const [dashboardHeroCards] = useState<DashboardCardProps[]>([
    {
      icon: product,
      title: "Total Product",
      value: 0,
    },
    {
      icon: sales,
      title: "Total Sales",
      value: 3000,
    },
    {
      icon: stock,
      title: "Stock Left",
      value: 0,
    },
    {
      icon: stock,
      title: "Stock Left",
      value: 0,
    },
  ]);
  const [transactionsMockTableRows] = useState([
    [
      { hasAvatar: false, statusText: "", img: "", name: "Yam" },
      "Cerels",
      "₦12,2200",
      "31 Mar, 2024",
      "Buha",
      "10 bags",
      { isStatus: true, statusText: "In stock" },
    ],
    [
      { hasAvatar: false, statusText: "", img: "", name: "Maize" },
      "Grains",
      "₦12,900",
      "30 Mar, 2024",
      "Buhari",
      "5 bags",
      { isStatus: false, statusText: "No stock" },
    ],
  ]);

  return (
    <DashboardArea title={`Welcome Raphael`}>
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
        <div className="bg-white p-4 w-full mb-4 lg:mb-0 lg:w-[59%] h-[331px] rounded-lg">
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
          <BaseTable
            tableRows={
              searchQuery ? filteredTableRows : transactionsMockTableRows
            }
            headers={transactionTableHeaders}
            showPagination={true}
          />
        </div>
        <div className="bg-white w-full lg:w-[40%] h-[331px] p-4 rounded-lg">
          <div className="bg-white flex mb-5 flex-row justify-between items-center">
            <div className="bg-white">
              <h2 className="bg-white text-[14px] text-[#343434] font-bold font-DMSans">
                Product Delivery
              </h2>
              <p className="bg-white text-[14px] text-[#8F94A8] font-normal font-DMSans">
                200 orders delivered so far
              </p>
            </div>
            <button className="w-auto p-[10px] rounded-[4px] text-[12px] font-semibold font-DMSans bg-[#F5F6FB]">
              More Details
            </button>
          </div>
          <div className="h-[240px] rounded-[4px] overflow-y-auto bg-white">
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
