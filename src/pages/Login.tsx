import { useState } from "react";
import { agrify, agrify_logo } from "../assets";
import { MdCheck } from "react-icons/md";
import { BaseButton } from "../components/ui/button/BaseButton";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const [islanguage, setIslanguage] = useState(false);
  const [selectedValue, setSelectedValue] = useState("en");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedValue(lng);
  };
  // const options = ["en", "yo", "ig", "ha"];
  const options = [
    { name: "English", abbreviation: "en" },
    { name: "Yoruba", abbreviation: "yo" },
    { name: "Igbo", abbreviation: "ig" },
    { name: "Hausa", abbreviation: "ha" },
  ];

  const handleShow = () => {
    setIslanguage(true);
  };

  return (
    <div className="bg-themeGreen px-[8px] h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col mb-[15rem] gap-3 justify-center items-center">
        <img src={agrify_logo} alt="Agrify" className="w-[60px]" />
        <img src={agrify} alt="Agrify" />
      </div>
      {islanguage ? (
        <>
          <div className="w-[301px] h-[269px] mb-[30px] flex flex-col justify-start items-center p-4 font-semibold bg-themeWhite rounded-[12px]">
            <h2 className="text-[16px] text-center text-[#00A45F]">
              {t("select_your_preferred_language")}
            </h2>
            <div className="flex justify-center mt-6 items-center flex-col">
              {options.map((option, index) => (
                <>
                  <button
                    key={index}
                    className="w-[98px] h-[38px] font-DMSans gap-4 flex justify-between items-center text-left text-[12px] text-[#808080]"
                    onClick={() => changeLanguage(option.abbreviation)}
                  >
                    <h2>{option.name} </h2>
                    {selectedValue === option.abbreviation && (
                      <span>
                        <MdCheck />
                      </span>
                    )}
                  </button>
                </>
              ))}
            </div>
          </div>
          <BaseButton
            containerCLassName="w-full font-semibold font-DMSans h-[50px] gap-2 sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3 p-4"
            hoverScale={1.01}
            hoverOpacity={0.8}
            tapScale={0.9}
            onClick={handleShow}
          >
            <span>{t("continue")}</span>
          </BaseButton>
        </>
      ) : (
        <div className="w-[90%] lg:w-[90%] flex flex-col gap-6 items-center justify-center">
          <BaseButton
            containerCLassName="w-full font-DMSans h-[50px] gap-2 bg-themeWhite sm:h-[46px] text-[#000] [@media(max-width:800px)]:p-3 p-4"
            hoverScale={1.01}
            hoverOpacity={0.8}
            tapScale={0.9}
            onClick={handleShow}
          >
            <span>Register</span>
          </BaseButton>
          <BaseButton
            containerCLassName="w-full font-DMSans h-[50px] gap-2 bg-themeWhite sm:h-[46px] text-[#000] [@media(max-width:800px)]:p-3 p-4"
            hoverScale={1.01}
            hoverOpacity={0.8}
            tapScale={0.9}
          >
            <span>Log in</span>
          </BaseButton>
        </div>
      )}
    </div>
  );
};

export default Login;
