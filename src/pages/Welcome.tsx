import { useEffect, useState } from "react";
import { agrify, agrify_logo, agrify_dark, agrifydark } from "../assets";
import { MdCheck } from "react-icons/md";
import { BaseButton } from "../components/ui/button/BaseButton";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { IoReturnUpBack } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BaseInput } from "../components/ui/data_inputs/text-inputs";
import { SelectInput } from "../components/ui/data_inputs/select-input";
import { OTPInput } from "../components/ui/data_inputs/otp-input";
import { PINinput } from "../components/ui/data_inputs/pin-input";
import { RiRoadMapLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import CountdownTimer from "../components/ui/displays/CountdownTimer";
import { CreatedModal } from "../components/ui/modals/CreatedModal";
import { Accountexist } from "../components/ui/modals/Accountexist";
import { IoMdArrowDropdown } from "react-icons/io";
import classNames from "classnames";

export const Welcome = () => {
  const [isContinue, setIsContinue] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOtpsubmitted, setisOtpsubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExistModalOpen, setIsExistModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isloaded, setIsloaded] = useState(true);
  const [otp, setOtp] = useState("");
  const [isselectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });
  const [pin, setPin] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isTimedOut, setIsTimedOut] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [focusedInput, setFocusedInput] = useState<{
    [key: string]: boolean;
  }>({
    firstName: false,
    lastName: false,
    location: false,
    phone: false,
    email: false,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedValue(lng);
  };

  const options = [
    { name: "English", abbreviation: "en" },
    { name: "Yoruba", abbreviation: "yo" },
    { name: "Igbo", abbreviation: "ig" },
    { name: "Hausa", abbreviation: "ha" },
  ];

  const countryCode = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  useEffect(() => {
    setSelectedValue("en");
    setTimeout(() => {
      setIsloaded(false);
    }, 1000);
  }, []);

  const handleFocus = (inputName: string) => {
    setFocusedInput({ ...focusedInput, [inputName]: true });
  };

  const handleBlur = (inputName: string) => {
    setFocusedInput({ ...focusedInput, [inputName]: false });
  };

  const handleFormshow = () => {
    setIsContinue(true);
  };

  const handlenameselect = (selectedOption: any) => {
    setIsLocation(false);
    setSelectedOption(selectedOption);
  };

  const handleFormsubmit = async () => {
    try {
      setIsSubmitted(true);
    } catch (error: any) {
      setMessage(error.response.data.message);
      setIsExistModalOpen(true);
    }
  };

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handlePinChange = (newPin: string) => {
    setPin(newPin);
  };

  const handleSubmit = async () => {
    setisOtpsubmitted(true);
  };

  const handlePinSubmit = async () => {
    try {
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTimeout = () => {
    setIsTimedOut(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsExistModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed right-0 top-0 z-[999] h-full w-full bg-[#435060] transition-[.5s]"></div>
      )}
      {isExistModalOpen && (
        <div className="fixed right-0 top-0 z-[999] h-full w-full bg-[#435060] opacity-55 transition-[.5s]"></div>
      )}
      {isloaded ? (
        <>
          <div className="bg-themeGreen px-[8px] h-[100vh] flex justify-center items-center">
            <div className="flex gap-3 justify-center items-center">
              <img src={agrify_logo} alt="Agrify" className="w-[100%]" />
              <img src={agrify} alt="Agrify" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* REGISTRATION */}
          {isContinue ? (
            <>
              {isSubmitted ? (
                <>
                  {isOtpsubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="bg-themeWhite w-full px-[8px] h-[100vh] py-4 flex flex-col justify-start items-start"
                    >
                      <button
                        className="w-auto  mt-[2rem] flex justify-center items-center gap-2 p-[10px] text-[12px] font-semibold bg-themeGreen/10 h-[35px] rounded-[8px] border-[0.5px] border-themeGreen"
                        onClick={() => setisOtpsubmitted(false)}
                      >
                        <IoReturnUpBack />
                        <p>Go back</p>
                      </button>
                      <div className="flex h-full px-2 justify-start items-start w-full flex-col mt-[2rem]">
                        <h2 className="text-[24px] font-bold text-left font-DMSans">
                          Secure your new account
                        </h2>
                        <div className="w-full h-full relative mt-10 lg:mb-4">
                          <h2 className="text-[14px] font-semibold mb-6 font-DMSans">
                            Create new account PIN
                          </h2>
                          <div className="w-full flex justify-center items-center gap-6 mb-[10px]">
                            <PINinput length={4} onChange={handlePinChange} />
                          </div>
                          {pin.length !== 4 ? (
                            <BaseButton
                              containerCLassName="w-full absolute disabled bottom-0 right-0 left-0 font-semibold bg-themeGrey rounded-[4px] font-DMSans h-[50px]  sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3"
                              hoverScale={1.01}
                              hoverOpacity={0.8}
                              tapScale={0.9}
                              onClick={handlePinSubmit}
                            >
                              <span>Done</span>
                            </BaseButton>
                          ) : (
                            <BaseButton
                              containerCLassName="w-full absolute bottom-0 right-0 left-0 font-semibold bg-themeGreen rounded-[4px] font-DMSans h-[50px]  sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3"
                              hoverScale={1.01}
                              hoverOpacity={0.8}
                              tapScale={0.9}
                              onClick={handlePinSubmit}
                            >
                              <span>Done</span>
                            </BaseButton>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="bg-themeWhite w-full px-[8px] h-[100vh] py-4 flex flex-col justify-start items-start"
                    >
                      <button
                        className="w-auto  mt-[2rem] border-[0.5px] border-themeGreen flex justify-center items-center gap-2 p-[10px] text-[12px] font-semibold bg-themeGreen/10 h-[35px] rounded-[8px]"
                        onClick={() => setIsSubmitted(false)}
                      >
                        <IoReturnUpBack />
                        <p>Go back</p>
                      </button>
                      <div className="flex h-full px-2 justify-start items-start w-full flex-col mt-[2rem]">
                        <h2 className="text-[24px] font-bold text-left font-DMSans">
                          Enter the code, sent to your phone.
                        </h2>
                        <div className="w-full h-full relative mt-10 lg:mb-4">
                          <h2 className="text-[14px] font-semibold mb-6 font-DMSans">
                            Input OTP received
                          </h2>
                          <div className="w-full  mb-[10px]">
                            <OTPInput
                              length={5}
                              onChange={handleOtpChange}
                              isTimeout={isTimedOut}
                            />
                          </div>
                          <div className="flex mt-8 lg:mb-[5rem] justify-start gap-1 items-center">
                            <h2 className="text-[#A9A9A9] text-[14px] font-semibold font-DMSans">
                              Resend in
                            </h2>
                            <span className="text-[#343434] text-[14px] font-semibold font-DMSans">
                              <CountdownTimer
                                duration={120}
                                onTimeout={handleTimeout}
                              />
                            </span>
                          </div>
                          {otp.length !== 5 ? (
                            <BaseButton
                              containerCLassName="w-full disabled absolute bottom-0 right-0 left-0 font-semibold bg-themeGrey rounded-[4px] font-DMSans h-[50px]  sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3"
                              hoverScale={1.01}
                              hoverOpacity={0.8}
                              tapScale={0.9}
                              onClick={handleSubmit}
                            >
                              <span>proceed</span>
                            </BaseButton>
                          ) : (
                            <BaseButton
                              containerCLassName="w-full absolute bottom-0 right-0 left-0 font-semibold bg-themeGreen rounded-[4px] font-DMSans h-[50px]  sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3"
                              hoverScale={1.01}
                              hoverOpacity={0.8}
                              tapScale={0.9}
                              onClick={handleSubmit}
                            >
                              <span>proceed</span>
                            </BaseButton>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="bg-themeWhite w-full px-[8px] h-[100vh] py-4 flex flex-col justify-start items-start"
                >
                  <button
                    className="w-auto border-[0.5px] border-themeGreen mt-[2rem] flex justify-center items-center gap-2 p-[10px] text-[12px] font-semibold bg-themeGreen/10 h-[35px] rounded-[8px]"
                    onClick={() => setIsContinue(false)}
                  >
                    <IoReturnUpBack />
                    <p>Go back</p>
                  </button>
                  <div className="flex h-full px-2 justify-start items-start w-full flex-col mt-[2rem]">
                    <h2 className="text-[24px] font-bold text-left font-DMSans">
                      Fill out the form to register.
                    </h2>
                    <div className="w-full h-full relative mt-10 lg:mb-4">
                      <div className="w-full mb-[10px]">
                        <label
                          htmlFor="firstName"
                          className="text-[12px] font-DMSans"
                        >
                          First Name
                        </label>
                        <div
                          className={classNames(
                            "border-[1px] flex justify-start items-center gap-2 w-full mt-[2px] border-themeGrey h-[50px] rounded-[4px] px-2",
                            {
                              "border-[#00A45F]": focusedInput.firstName,
                              "border-gray-300": !focusedInput.firstName,
                            }
                          )}
                          onFocus={() => handleFocus("firstName")}
                          onBlur={() => handleBlur("firstName")}
                        >
                          {focusedInput.firstName ? (
                            <FaUser className="text-[20.5px] text-themeGreen" />
                          ) : (
                            <FaUser className="text-[20.5px] text-themeGrey" />
                          )}
                          <BaseInput
                            type="text"
                            value={formData.firstName}
                            name="firstName"
                            placeholder="Enter your firstname"
                            className="w-full font-DMSans p-[10px] text-left font-normal focus:outline-none"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="w-full  mb-[10px]">
                        <label
                          htmlFor="lastName"
                          className="text-[12px] font-DMSans"
                        >
                          Last Name
                        </label>
                        <div
                          className={classNames(
                            "border-[1px] flex justify-start items-center gap-2 w-full mt-[2px] border-themeGrey h-[50px] rounded-[4px] px-2",
                            {
                              "border-[#00A45F]": focusedInput.lastName,
                              "border-gray-300": !focusedInput.lastName,
                            }
                          )}
                          onFocus={() => handleFocus("lastName")}
                          onBlur={() => handleBlur("lastName")}
                        >
                          {focusedInput.lastName ? (
                            <FaUser className="text-[20.5px] text-themeGreen" />
                          ) : (
                            <FaUser className="text-[20.5px] text-themeGrey" />
                          )}
                          <BaseInput
                            type="text"
                            value={formData.lastName}
                            name="lastName"
                            placeholder="Enter your lastname"
                            className="w-full font-DMSans p-[10px] text-left focus:outline-none font-normal "
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="w-full mb-[10px] relative">
                        <label
                          htmlFor="location"
                          className="text-[12px] font-DMSans"
                        >
                          Location
                        </label>
                        <div
                          className={classNames(
                            "border-[1px] flex justify-start items-center gap-2 w-full mt-[2px] border-themeGrey h-[50px] rounded-[4px] px-2",
                            {
                              "border-[#00A45F]": focusedInput.location,
                              "border-gray-300": !focusedInput.location,
                            }
                          )}
                          onFocus={() => handleFocus("location")}
                          onBlur={() => handleBlur("location")}
                          onClick={() => setIsLocation(!isLocation)}
                        >
                          {focusedInput.location ? (
                            <RiRoadMapLine className="text-[30.5px] text-themeGreen" />
                          ) : (
                            <RiRoadMapLine className="text-[30.5px] text-themeGrey" />
                          )}
                          {isselectedOption.label !== "" ? (
                            <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[18px] text-left focus:outline-none font-normal ">
                              {isselectedOption.label}
                            </h2>
                          ) : (
                            <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[18px] text-left focus:outline-none font-normal ">
                              Select Location
                            </h2>
                          )}
                          <IoMdArrowDropdown className="text-[20.5px] text-themeGrey" />
                        </div>
                        {isLocation && (
                          <div className="bg-white absolute w-full h-[40px]">
                            <SelectInput
                              options={countryCode}
                              onChange={handlenameselect}
                            />
                          </div>
                        )}
                      </div>
                      <div className="w-full  mb-[10px]">
                        <label
                          htmlFor="phonenumber"
                          className="text-[12px] font-DMSans"
                        >
                          Phone number
                        </label>
                        <div
                          className={classNames(
                            "border-[1px] flex justify-start items-center gap-2 w-full mt-[2px] border-themeGrey h-[50px] rounded-[4px] px-2",
                            {
                              "border-[#00A45F]": focusedInput.phone,
                              "border-gray-300": !focusedInput.phone,
                            }
                          )}
                          onFocus={() => handleFocus("phone")}
                          onBlur={() => handleBlur("phone")}
                        >
                          {focusedInput.phone ? (
                            <TbPhoneCall className="text-[30.5px] text-themeGreen" />
                          ) : (
                            <TbPhoneCall className="text-[30.5px] text-themeGrey" />
                          )}
                          <BaseInput
                            type="number"
                            value={formData.phone}
                            name="phone"
                            placeholder="Enter your phone number"
                            className="w-full font-DMSans p-[10px] text-left focus:outline-none font-normal "
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="w-full  mb-[10px]">
                        <label
                          htmlFor="email"
                          className="text-[12px] font-DMSans"
                        >
                          Email (Optional)
                        </label>
                        <div
                          className={classNames(
                            "border-[1px] flex justify-start items-center gap-2 w-full mt-[2px] border-themeGrey h-[50px] rounded-[4px] px-2",
                            {
                              "border-[#00A45F]": focusedInput.email,
                              "border-gray-300": !focusedInput.email,
                            }
                          )}
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlur("email")}
                        >
                          {focusedInput.email ? (
                            <MdOutlineEmail className="text-[30.5px] text-themeGreen" />
                          ) : (
                            <MdOutlineEmail className="text-[30.5px] text-themeGrey" />
                          )}
                          <BaseInput
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email address"
                            className="w-full font-DMSans p-[10px] text-left focus:outline-none font-normal "
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="flex mt-8 lg:mb-[5rem] justify-center gap-1 items-center">
                        <h2 className="text-[#343434] text-[14px] font-semibold font-DMSans">
                          You already have an account?
                        </h2>
                        <button className="text-themeGreen text-[14px] font-semibold font-DMSans">
                          Login
                        </button>
                      </div>

                      <BaseButton
                        containerCLassName="w-full absolute disabled bottom-0 right-0 left-0 font-semibold bg-themeGreen rounded-[4px] font-DMSans h-[50px]  sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3"
                        hoverScale={1.01}
                        hoverOpacity={0.8}
                        tapScale={0.9}
                        onClick={handleFormsubmit}
                      >
                        <span>proceed</span>
                      </BaseButton>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-themeWhite w-full px-[8px] h-[100vh] flex flex-col justify-end items-center"
              >
                <>
                  <div className="flex mb-[5rem] gap-3 justify-center items-center">
                    <img src={agrify_dark} alt="Agrify" className="w-[100%]" />
                    <img src={agrifydark} alt="Agrify" />
                  </div>
                  <div className="w-full mb-6 flex justify-center items-center flex-col">
                    <div className="w-[301px] h-[269px] mb-[8rem] flex flex-col justify-center items-center p-4 font-semibold bg-themeWhite rounded-[12px]">
                      <h2 className="text-[16px] text-center text-[#00A45F]">
                        {t("select_your_preferred_language")}
                      </h2>
                      <div className="flex justify-center mt-6 items-center flex-col">
                        {options.map((option, index) => (
                          <>
                            <button
                              key={index}
                              className="w-[98px] h-[38px] font-DMSans gap-4 flex justify-between items-center text-left text-[12px] text-[#808080]"
                              onClick={() =>
                                changeLanguage(option.abbreviation)
                              }
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
                      containerCLassName="w-full font-semibold bg-themeGreen rounded-[4px] font-DMSans h-[50px] gap-2 sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3 p-4"
                      hoverScale={1.01}
                      hoverOpacity={0.8}
                      tapScale={0.9}
                      onClick={handleFormshow}
                    >
                      <span>{t("continue")}</span>
                    </BaseButton>
                  </div>
                </>
              </motion.div>
            </AnimatePresence>
          )}
        </>
      )}
      <CreatedModal
        userId=""
        isOpen={isModalOpen}
        closeModal={handleModalClose}
      />
      <Accountexist
        userId={message}
        isOpen={isExistModalOpen}
        closeModal={handleModalClose}
      />
    </>
  );
};
