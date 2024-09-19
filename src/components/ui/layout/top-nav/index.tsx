import { Bell } from "react-huge-icons/outline";
import { Heading } from "../../../ui/typography";

export interface TopNavProps {
  title: string;
}

export const TopNav = ({ title }: TopNavProps) => {
  return (
    <header className="flex w-full justify-between items-center max-md:items-start">
      <div>
        <Heading
          level={6}
          className="text-[16px] text-[#000] font-bold md:text-[16px]"
        >
          {title}
        </Heading>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Bell className="w-[40px] text-[#000] mr-10 h-[40px]" />
        <div className="avatar online">
          <div className="w-[44px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h2 className="text-[12px] p-0 m-0 font-bold font-DMSans text-[#25313E]">
            Uzoh Daberechi
          </h2>
          <p className="text-[10px] p-0 m-0 font-normal font-DMSans text-[#8F94A8]">
            uzoh@agrifyemail.com
          </p>
        </div>
      </div>
      {/* <Avatar
        img="https://s3-alpha-sig.figma.com/img/3ac5/9d6a/0557cdcb4822c37843d94f72e14da689?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HGbXwbDZNEGNDVwkPZamfHUGLsPbR5JiSrv7bTdD478UUup6YkkJyYqza4S-8MKZINH30yIULXCnrx~FgOX1pkAgQf7t~~HRYV3ELOh-Pj6cQMSZZt1fROzFih72NsQAb4UZIMULKZ6vIO06w8zOXAviRkGWs8Om8tE856X4A4vOubKdLaQsfCCoO09jEvkmd7bHxbQg42zlBK6eRdGYzsnHLA8jyN2mp6LEK6VLfuC0tsFnIVyi2A6wj4eGf6fdGPBuyudAcTon5XwfIUgu3zM4qNm3vo7ukC64r-zQ-cNPnIC7ps3IQKav6aDiz9YfqptBftCIhOR9-ujgx6kb8A__"
        name=""
        avatarClassName="md:h-11 h-36px w-36px rounded-full md:w-11"
        textClassName="font-medium text-sm max-md:hidden"
        wrapperClassName="max-md:gap-0"
      >
        <Text
          className="whitespace-nowrap pr-1 capitalize max-md:hidden"
          light
          size="xs"
        >
          Raphael
        </Text>
      </Avatar> */}
    </header>
  );
};
