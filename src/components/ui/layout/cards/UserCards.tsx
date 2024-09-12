export interface CardProps {
  Icon: string;
  title: string;
  value: number;
}

const UserCards = (props: CardProps) => {
  const { Icon, title, value } = props;

  return (
    <div className="bg-themeWhite py-3 px-5 w-[190px] h-[161px] flex-col flex justify-evenly items-start rounded-[8px] border-[1px] border-[#E6E8EF]">
      <img src={Icon} className="bg-themeWhite" />
      <h2 className="bg-themeWhite w-[52px] text-[14px] font-normal text-[#8F94A8] font-DMSans">
        {title}
      </h2>
      <h2 className="bg-themeWhite text-[20px] font-bold text-[#25313E] font-DMSans">
        {value}
      </h2>
    </div>
  );
};

export default UserCards;
