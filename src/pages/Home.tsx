import React, { useState, useRef, useCallback, useEffect } from "react";
import { DashboardArea } from "../components/ui/layout/dashboard/DashboardArea";
import { DashboardCardRow } from "../components/grouped-components/dashboard-card-row";
import { BaseButton } from "../components/ui/button/BaseButton";
import { FaPlus } from "react-icons/fa6";
import { BaseItem } from "../components/ui/item/BaseItem";
import { IoReturnUpBack } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { SelectInput } from "../components/ui/data_inputs/select-input";
import { ProductModal } from "../components/ui/modals/ProductModal";
import { BaseInput } from "../components/ui/data_inputs/text-inputs";
import { MdAdd } from "react-icons/md";
import classNames from "classnames";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import Webcam from "react-webcam";
import { MdOutlineCamera } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { new_product, all_product } from "../utils/apiService";
import { stock, sales, product } from "../assets";
import { DashboardCardProps } from "../components/ui/dashboard-card";

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
  const [isCategory, setIsCategory] = useState(false);
  const [isnewproduct, setisnewproduct] = useState(false);
  const [isProductnamesel, setisProductnamesel] = useState(false);
  const [isProductname, setIsProductname] = useState(false);
  const [WecamActive, setWecamActive] = useState(false);
  const [productAdded, setproductAdded] = useState(false);
  const [isFormComplete, setisFormComplete] = useState(false);
  const [isPicture, setisPicture] = useState(false);
  const [isReview, setisReview] = useState(false);
  const [currentQty, setcurrentQty] = useState("");
  const [inputs, setInputs] = useState([{ quantity: "", price: "" }]);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [images, setImages] = useState<string[]>([]);
  const webcamRef = useRef<Webcam>(null);
  const [isproductSelected, setisproductSelected] = useState(false);
  const [dashboardHeroCards, setDashboardHeroCards] = useState<
    DashboardCardProps[]
  >([
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
  ]);

  const [isselectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });
  const [isnameOption, setIsnameOption] = useState({
    value: "",
    label: "",
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

  const productCategory = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const productName = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const pricing = [
    { value: "1-9", label: "1-9pcs" },
    { value: "10-19", label: "10-19pcs" },
    { value: "20-29", label: "20-29pcs" },
  ];

  //   FUnction
  const handlenewProduct = () => {
    setisnewproduct(true);
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImages((prevImages) => [...prevImages, imageSrc]);
      }
    }
    setWecamActive(false);
  }, [webcamRef]);

  useEffect(() => {
    const getallproduct = async () => {
      try {
        const allproduct = await all_product();
        const productCount = allproduct.data?.allproduct.count;
        // Sum the currentQuantity of all products
        const totalCurrentQuantity = allproduct.data?.allproduct.rows.reduce(
          (sum: any, product: any) => {
            return sum + (parseInt(product.currentQuantity) || 0);
          },
          0
        );

        const updatedDashboardHeroCards = dashboardHeroCards.map((card) => {
          // Update the value property with the userCount
          if (card.title === "Total Product") {
            return {
              ...card,
              value: productCount || 0,
            };
          } else if (card.title === "Stock Left") {
            return {
              ...card,
              value: totalCurrentQuantity || 0,
            };
          }
          return card;
        });
        setDashboardHeroCards(updatedDashboardHeroCards);
      } catch (error) {
        console.log(error);
      }
    };
    getallproduct();
  }, []);

  const handleInputChange = (
    index: number | any,
    name: string,
    value: string | { value: string; label: string } | null
  ) => {
    let newValue: string | null;
    if (typeof value === "object" && value !== null) {
      newValue = value.value;
      setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
    } else {
      newValue = value;
    }

    const newInputs = inputs.map((input, i) =>
      i === index ? { ...input, [name]: newValue } : input
    );
    setInputs(newInputs);
  };

  const handleModalClose = () => {
    setproductAdded(false);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { quantity: "", price: "" }]);
  };

  const handleFocus = (name: string) => {
    setFocusedInput({ ...focusedInput, [name]: true });
  };

  const handleBlur = (name: string) => {
    setFocusedInput({ ...focusedInput, [name]: false });
  };

  const handleProductselect = (selectedOption: any) => {
    setIsCategory(false);
    setSelectedOption(selectedOption);
    setisproductSelected(true);
  };

  const handlenameselect = (selectedOption: any) => {
    setIsProductname(false);
    setisProductnamesel(true);
    setIsnameOption(selectedOption);
  };

  const toggleDropdown = (index: any) => {
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

  const handlecurrQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcurrentQty(e.target.value);
    setisFormComplete(true);
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (!files) return;

  //   const newImages = Array.from(files).map((file) =>
  //     URL.createObjectURL(file)
  //   );
  //   setImages([...images, ...newImages]);
  // };

  const handleImageRemove = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleFormsubmit = async () => {
    try {
      // Constructing the object with form inputs
      const formData = {
        category: isselectedOption.label,
        productName: isnameOption.label,
        pricing: inputs,
        currentQuantity: currentQty,
        images: images,
      };
      const res = await new_product(formData);
      if (res) {
        setproductAdded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePicture = () => {
    setisPicture(true);
  };

  const handleReview = () => {
    setisReview(true);
  };

  return (
    <DashboardArea title={`Welcome Raphael`}>
      {productAdded && (
        <div className="fixed right-0 top-0 z-[999] h-full w-full opacity-40 bg-[#435060] transition-[.5s]"></div>
      )}
      {isnewproduct ? (
        <motion.div
          className="h-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <button
            className="w-auto mb-[1rem] flex justify-center items-center gap-2 p-[10px] text-[12px] font-semibold bg-themeGreen/10 h-[35px] border-[0.5px] border-themeGreen rounded-[8px]"
            onClick={() => setisnewproduct(false)}
          >
            <IoReturnUpBack />
            <p>Go back</p>
          </button>
          {isPicture ? (
            <>
              {isReview ? (
                <div className="relative h-[70vh]">
                  <h2 className="text-[20px] font-bold ">
                    Review your product detail
                  </h2>
                  <div className="w-full h-auto my-4">
                    <div className="flex w-full h-[47px] py-2 justify-between items-center">
                      <h2 className="text-[12px] font-bold ">
                        Product Information
                      </h2>
                      <button className="text-[#415BE6] flex justify-center items-center gap-1 font-normal font-DMSans text-[12px]">
                        <AiFillEdit className="text-[20px]" /> <p>Edit</p>
                      </button>
                    </div>
                    <div className="w-full h-full bg-[#E6E6E8] px-8 py-3 rounded-[12px]">
                      <ul className="w-full h-full">
                        <li className="flex justify-between h-[26px] items-center">
                          <p className="text-[#435060] font-semibold text-[12px]">
                            Product Category
                          </p>
                          <p className="text-[12px] font-bold font-DMSans">
                            Tubers
                          </p>
                        </li>
                        <li className="flex justify-between h-[26px] items-center">
                          <p className="text-[#435060] font-semibold text-[12px]">
                            Product Name
                          </p>
                          <p className="text-[12px] font-bold font-DMSans">
                            Cassava
                          </p>
                        </li>
                        <li className="flex justify-between h-[26px] items-center">
                          <p className="text-[#435060] font-semibold text-[12px]">
                            Product Quantity
                          </p>
                          <p className="text-[12px] font-bold font-DMSans">
                            1-9pcs
                          </p>
                        </li>
                        <li className="flex justify-between h-[26px] items-center">
                          <p className="text-[#435060] font-semibold text-[12px]">
                            Product Image
                          </p>
                          <div className="bg-themeGrey w-[36px] h-[29px] rounded-[4px] relative">
                            <p className="absolute inset-0 left-2 top-1 text-themeWhite font-semibold font-DMSans text-[12px]">
                              + {images.length}
                            </p>
                            <img src="" alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full h-auto my-4">
                    <div className="flex w-full h-[47px] py-2 justify-between items-center">
                      <h2 className="text-[12px] font-bold ">
                        Pricing & Quantity
                      </h2>
                      <button className="text-[#415BE6] flex justify-center items-center gap-1 font-normal font-DMSans text-[12px]">
                        <AiFillEdit className="text-[20px]" /> <p>Edit</p>
                      </button>
                    </div>
                    <div className="w-full h-full bg-[#E6E6E8] px-8 py-3 rounded-[12px]">
                      <ul className="w-full h-full">
                        <li className="flex justify-between h-[26px] items-center">
                          <p className="text-[#435060] font-semibold text-[12px]">
                            Product Price
                          </p>
                          <p className="text-[12px] font-bold font-DMSans">
                            ₦500
                          </p>
                        </li>
                        <li className="flex justify-between h-[26px] items-center">
                          <p className="text-[#435060] font-semibold text-[12px]">
                            How many tubers do you have in stock?
                          </p>
                          <p className="text-[12px] font-bold font-DMSans">
                            3000
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 gap-3 flex justify-center items-center">
                    <BaseButton
                      containerCLassName="w-full font-semibold rounded-[4px] font-DMSans h-[50px] sm:h-[46px] text-themeGreen border-[1px] border-themeGreen bg-themeWhite"
                      hoverScale={1.01}
                      hoverOpacity={0.8}
                      tapScale={0.9}
                      onClick={handleReview}
                      // onClick={handleFormsubmit}
                      disabled={!isFormComplete}
                    >
                      <span>Go Back</span>
                    </BaseButton>
                    <BaseButton
                      containerCLassName={`w-full font-semibold rounded-[4px] font-DMSans h-[50px] sm:h-[46px] text-[#fff] ${
                        isFormComplete ? "bg-themeGreen" : "bg-themeGrey"
                      } [@media(max-width:800px)]:p-3`}
                      hoverScale={1.01}
                      hoverOpacity={0.8}
                      tapScale={0.9}
                      onClick={handleFormsubmit}
                      disabled={!isFormComplete}
                    >
                      <span>Save</span>
                    </BaseButton>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-[20px] font-bold ">Product image</h2>
                  <p className="text-[12px] font-semibold text-themeGreen bg-themeGreen/10 p-[4px] rounded-md">
                    Take a picture of the product you have for sale.
                  </p>
                  <div className="mt-4 w-full h-[300px] rounded-[4px]">
                    {images.length > 0 ? (
                      <div>
                        {images.map((image, index) => (
                          <div key={index} className="relative">
                            <button
                              onClick={() => handleImageRemove(index)}
                              className="absolute right-2 top-2"
                            >
                              <MdOutlineCancel className="text-[32px] bg-[#000000] text-themeWhite rounded-full" />
                            </button>
                            <img
                              src={image}
                              alt={`Captured ${index + 1}`}
                              className="w-full rounded-lg mb-4"
                            />
                          </div>
                        ))}
                        <div className="w-full flex flex-col justify-center items-center">
                          {WecamActive && (
                            <div className="relative">
                              <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                className="w-full rounded-lg"
                              />
                              <button onClick={capture}>
                                <MdOutlineCamera className="text-[40px] text-themeWhite absolute w-full bottom-6" />
                              </button>
                            </div>
                          )}
                          <button
                            onClick={() => setWecamActive(true)}
                            className="w-full h-[44px] text-[#6D9EFF] border-[1px] mt-4 flex justify-center items-center rounded-[4px] border-dashed border-[#6D9EFF] font-DMSans text-[13px] font-bold"
                          >
                            <MdAdd className="text-[20px]" />
                            <h2 className="uppercase">Capture Another Image</h2>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex justify-center items-center">
                        {WecamActive ? (
                          <div className="relative">
                            <Webcam
                              audio={false}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              className="w-full rounded-lg"
                            />
                            <button onClick={capture} className="">
                              <MdOutlineCamera className="text-[40px] text-themeWhite absolute w-full bottom-6" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setWecamActive(true)}
                            className="w-full h-[44px] text-[#6D9EFF] border-[1px] mt-4 flex justify-center items-center rounded-[4px] border-dashed border-[#6D9EFF] font-DMSans text-[13px] font-bold"
                          >
                            <MdAdd className="text-[20px]" />
                            <h2 className="uppercase">Capture Image</h2>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <BaseButton
                    containerCLassName={`w-full absolute bottom-0 right-0 left-0 font-semibold rounded-[4px] font-DMSans h-[50px] sm:h-[46px] text-[#fff] ${
                      isFormComplete ? "bg-themeGreen" : "bg-themeGrey"
                    } [@media(max-width:800px)]:p-3`}
                    hoverScale={1.01}
                    hoverOpacity={0.8}
                    tapScale={0.9}
                    onClick={handleReview}
                    // onClick={handleFormsubmit}
                    disabled={!isFormComplete}
                  >
                    <span>Save</span>
                  </BaseButton>
                </div>
              )}
            </>
          ) : (
            <div>
              <h2 className="text-[20px] font-bold ">Add new item</h2>
              <p className="text-[12px] font-semibold text-[#8F94A8]">
                Add a product you would like to sale in your shop.
              </p>
              <div className="w-full my-[10px] h-full relative">
                <label
                  htmlFor="location"
                  className="text-[12px] font-DMSans font-semibold"
                >
                  Product Category
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
                  onClick={() => setIsCategory(!isCategory)}
                >
                  {isselectedOption.label !== "" ? (
                    <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[18px] text-left focus:outline-none font-normal ">
                      {isselectedOption.label}
                    </h2>
                  ) : (
                    <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[18px] text-left focus:outline-none font-normal ">
                      Select a category
                    </h2>
                  )}
                  <IoMdArrowDropdown className="text-[20.5px] text-themeGrey" />
                </div>
                {isCategory && (
                  <div className="bg-white absolute w-full h-[40px]">
                    <SelectInput
                      options={productCategory}
                      onChange={handleProductselect}
                    />
                  </div>
                )}
              </div>
              {isproductSelected && (
                <motion.div
                  className="w-full my-[10px] h-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <label
                    htmlFor="location"
                    className="text-[12px] font-DMSans font-semibold"
                  >
                    Product name
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
                    onClick={() => setIsProductname(!isProductname)}
                  >
                    {isnameOption.label !== "" ? (
                      <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[18px] text-left focus:outline-none font-normal ">
                        {isnameOption.label}
                      </h2>
                    ) : (
                      <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[18px] text-left focus:outline-none font-normal ">
                        Select name
                      </h2>
                    )}
                    <IoMdArrowDropdown className="text-[20.5px] text-themeGrey" />
                  </div>
                  {isProductname && (
                    <div className="bg-white absolute w-full h-[40px]">
                      <SelectInput
                        options={productName}
                        onChange={handlenameselect}
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {isProductnamesel && (
                <motion.div
                  className="w-full my-[10px] h-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <h2 className="text-[12px] text-[#25313E] font-DMSans font-semibold">
                    Pricing (Enter the price of your product)
                  </h2>
                  <div className="h-auto w-full rounded-[8px] p-[18px] border-[0.2px] border-[#E6E6E8] bg-[#F5F6FA] mt-2">
                    {inputs.map((input, index) => (
                      <div
                        key={index}
                        className="flex justify-center gap-2 items-center"
                      >
                        <motion.div
                          className="w-full my-[10px] h-full relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                        >
                          <label
                            htmlFor={`quantity-${index}`}
                            className="text-[12px] font-DMSans font-semibold"
                          >
                            Product Quantity
                          </label>
                          <div
                            className={`border-[1px] flex justify-start items-center gap-2 w-full mt-[2px] bg-themeWhite border-themeGrey h-[50px] rounded-[4px] px-2 ${
                              focusedInput[`quantity-${index}`]
                                ? "border-[#00A45F]"
                                : "border-gray-300"
                            }`}
                            onFocus={() => handleFocus(`quantity-${index}`)}
                            onBlur={() => handleBlur(`quantity-${index}`)}
                            onClick={() => toggleDropdown(index)}
                          >
                            <h2 className="w-full font-DMSans p-[10px] text-themeGrey text-[12px] text-left focus:outline-none font-normal">
                              {input.quantity || "Select Quantity"}
                            </h2>
                            <IoMdArrowDropdown className="text-[20.5px] text-themeGrey" />
                          </div>
                          {activeDropdownIndex === index && (
                            <div className="bg-white absolute w-full h-[40px]">
                              <SelectInput
                                options={pricing}
                                onChange={(value) =>
                                  handleInputChange(index, "quantity", value)
                                }
                              />
                            </div>
                          )}
                        </motion.div>
                        <motion.div
                          className="w-full my-[10px] h-full relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                        >
                          <label
                            htmlFor={`price-${index}`}
                            className="text-[12px] mb-1 font-DMSans font-semibold"
                          >
                            Product Price
                          </label>
                          <BaseInput
                            type="text"
                            value={input.price}
                            name={`price-${index}`}
                            placeholder="Enter your price"
                            className="w-full font-DMSans p-[10px] border-[1px] border-themeGrey text-left text-[12px] rounded-[4px] h-[50px] font-normal bg-themeWhite focus:outline-none"
                            onChange={(e) =>
                              handleInputChange(index, "price", e.target.value)
                            }
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleAddInput}
                    className="font-semibold mt-4 bg-themeGreen/10 text-themeGreen w-full gap-2 flex justify-center items-center h-[50px] rounded-[4px] border-[0.5px] border-themeGreen"
                  >
                    <MdAdd className="text-[20px]" />
                    <p className="text-[13px]"> Add more</p>
                  </button>
                  <motion.div
                    className="w-full my-[10px] h-full relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <label
                      htmlFor="qty"
                      className="text-[12px] mb-1 font-DMSans font-semibold"
                    >
                      How many tubers do you have in stock?
                    </label>
                    <BaseInput
                      type="text"
                      value={currentQty}
                      name="currentQty"
                      placeholder="Enter the current quantity"
                      className="w-full font-DMSans p-[10px] border-[1px] border-themeGrey text-left text-[12px] rounded-[4px] h-[50px] font-normal bg-themeWhite focus:outline-none"
                      onChange={handlecurrQty}
                    />
                  </motion.div>
                </motion.div>
              )}
              <BaseButton
                containerCLassName={`w-full absolute bottom-0 right-0 left-0 font-semibold rounded-[4px] font-DMSans h-[50px]  sm:h-[46px] text-[#fff] ${
                  isFormComplete ? "bg-themeGreen" : "bg-themeGrey"
                } [@media(max-width:800px)]:p-3`}
                hoverScale={1.01}
                hoverOpacity={0.8}
                tapScale={0.9}
                onClick={handlePicture}
                // onClick={handleFormsubmit}
                disabled={!isFormComplete}
              >
                <span>Next</span>
              </BaseButton>
            </div>
          )}
        </motion.div>
      ) : (
        <div className="w-full">
          <DashboardCardRow dashboardHeroCards={dashboardHeroCards} />
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
      <ProductModal
        userId=""
        isOpen={productAdded}
        closeModal={handleModalClose}
      />
    </DashboardArea>
  );
};
