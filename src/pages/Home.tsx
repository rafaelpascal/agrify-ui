import { useState } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { BaseButton } from "../components/ui/button/BaseButton";
import { FaPlus } from "react-icons/fa6";
import { BaseItem } from "../components/ui/item/BaseItem";
import { IoReturnUpBack } from "react-icons/io5";

const items = [
  {
    icon: "https://s3-alpha-sig.figma.com/img/ee10/564d/aad91c59eeb694d3acc38b2e444d7534?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YvyE1E1zbhxrJcOlMGTHITRdV1hlG8miWl8MadYNVdKzia6PgsTLdu9E20ygyIoFL6SZqFKge1YghU4RCwEII7UavnnaldJ5ozG0cl2NfL6ba5sczziGhnsPcMOOe4KgBhlQalFDnlh36XsxG9e8bSiMEq8EfwDQd56KTkoQjr5QSxm0SsWR-PNesNg~XboyEw30tvIZ4Bc1SwN~kg1Ih969bEMR-CEnfCS5IjF3rkPeJq0HefYyIVGR3Oc8kcFVG6GGa5VXRN2wcSozqFt6AWQnTEYyzy-~HA3vTMOiDGDmka08nTCAHO0h5KbYK1WkRJdwCf~~h3FkqSjxHCwl-Q__",
    title: "Irish Potatoes",
    qty: "5 baskets",
    status: false,
    value: 200,
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/ee10/564d/aad91c59eeb694d3acc38b2e444d7534?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YvyE1E1zbhxrJcOlMGTHITRdV1hlG8miWl8MadYNVdKzia6PgsTLdu9E20ygyIoFL6SZqFKge1YghU4RCwEII7UavnnaldJ5ozG0cl2NfL6ba5sczziGhnsPcMOOe4KgBhlQalFDnlh36XsxG9e8bSiMEq8EfwDQd56KTkoQjr5QSxm0SsWR-PNesNg~XboyEw30tvIZ4Bc1SwN~kg1Ih969bEMR-CEnfCS5IjF3rkPeJq0HefYyIVGR3Oc8kcFVG6GGa5VXRN2wcSozqFt6AWQnTEYyzy-~HA3vTMOiDGDmka08nTCAHO0h5KbYK1WkRJdwCf~~h3FkqSjxHCwl-Q__",
    title: "Sweet Potatoes",
    qty: "20 baskets",
    status: true,
    value: 200,
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/ee10/564d/aad91c59eeb694d3acc38b2e444d7534?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YvyE1E1zbhxrJcOlMGTHITRdV1hlG8miWl8MadYNVdKzia6PgsTLdu9E20ygyIoFL6SZqFKge1YghU4RCwEII7UavnnaldJ5ozG0cl2NfL6ba5sczziGhnsPcMOOe4KgBhlQalFDnlh36XsxG9e8bSiMEq8EfwDQd56KTkoQjr5QSxm0SsWR-PNesNg~XboyEw30tvIZ4Bc1SwN~kg1Ih969bEMR-CEnfCS5IjF3rkPeJq0HefYyIVGR3Oc8kcFVG6GGa5VXRN2wcSozqFt6AWQnTEYyzy-~HA3vTMOiDGDmka08nTCAHO0h5KbYK1WkRJdwCf~~h3FkqSjxHCwl-Q__",
    title: "Yam",
    qty: "3 baskets",
    status: true,
    value: 200,
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/ee10/564d/aad91c59eeb694d3acc38b2e444d7534?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YvyE1E1zbhxrJcOlMGTHITRdV1hlG8miWl8MadYNVdKzia6PgsTLdu9E20ygyIoFL6SZqFKge1YghU4RCwEII7UavnnaldJ5ozG0cl2NfL6ba5sczziGhnsPcMOOe4KgBhlQalFDnlh36XsxG9e8bSiMEq8EfwDQd56KTkoQjr5QSxm0SsWR-PNesNg~XboyEw30tvIZ4Bc1SwN~kg1Ih969bEMR-CEnfCS5IjF3rkPeJq0HefYyIVGR3Oc8kcFVG6GGa5VXRN2wcSozqFt6AWQnTEYyzy-~HA3vTMOiDGDmka08nTCAHO0h5KbYK1WkRJdwCf~~h3FkqSjxHCwl-Q__",
    title: "Irish Potatoes",
    qty: "5 baskets",
    status: false,
    value: 200,
  },
];

export const Home = () => {
  const [isnewproduct, setisnewproduct] = useState(false);

  //   FUnction
  const handlenewProduct = () => {
    setisnewproduct(true);
  };
  return (
    <DashboardArea title={`Welcome Raphael`}>
      {isnewproduct ? (
        <div>
          <button
            className="w-auto mb-[1rem] flex justify-center items-center gap-2 p-[10px] text-[12px] font-semibold bg-themeGreen/10 h-[35px] border-[0.5px] border-themeGreen rounded-[8px]"
            onClick={() => setisnewproduct(false)}
          >
            <IoReturnUpBack />
            <p>Go back</p>
          </button>
          <h2 className="text-[20px] font-bold ">Add new item</h2>
          <p className="text-[12px] font-semibold text-[#8F94A8]">
            Add a product you would like to sale in your shop.
          </p>
        </div>
      ) : (
        <div className="w-full">
          <DashboardCardRow />
          <div className="w-full my-4">
            <BaseButton
              containerCLassName="w-full font-semibold bg-themeGreen rounded-[4px] font-DMSans h-[50px] gap-2 sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3 p-4"
              hoverScale={1.01}
              hoverOpacity={0.8}
              tapScale={0.9}
              onClick={handlenewProduct}
            >
              <span className="flex justify-center gap-3 items-center">
                <FaPlus fontSize={20} />
                Add product to shop
              </span>
            </BaseButton>
          </div>
          <div className="flex flex-col w-full overflow-y-scroll justify-center items-center">
            <div className="flex w-full my-2 justify-between items-center">
              <h2 className="text-[14px] text-[#25313E] font-semibold font-DMSans">
                Transaction History
              </h2>
              <h2 className="text-[14px] text-[#8F94A8] font-semibold font-DMSans">
                (2000)
              </h2>
            </div>
            <h2 className="text-[12px] text-[#8F94A8] font-semibold font-DMSans w-full text-left">
              Today
            </h2>
            {items.map((item, index) => (
              <BaseItem
                key={index}
                icon={item.icon}
                title={item.title}
                qty={item.qty}
                status={item.status}
                value={item.value}
              />
            ))}
          </div>
        </div>
      )}
    </DashboardArea>
  );
};
