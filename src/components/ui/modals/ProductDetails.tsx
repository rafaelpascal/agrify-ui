import { BaseModal } from "./BaseModal";
import { BaseButton } from "../../ui/button/BaseButton";
import { Camera, Pencil, Remove } from "react-huge-icons/outline";
import { motion } from "framer-motion";
import { FaAngleDown, FaChevronUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export const ProductDetails = ({
  userId,
  isOpen,
  closeModal,
}: IModalPropsType) => {
  const [isProductCategory, setIsProductCategory] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCategory, setCategory] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    stock: "",
    dateAdded: "",
    unitprice: "",
    stockprice: "",
    picture: null as File | null,
  });
  const [category] = useState(["Tubers", "Grain", "Fruits", "Livestock"]);

  const handleSelect = (item: any) => {
    setSelectedItem(item);
    setCategory(item);
    setIsProductCategory(false);
  };

  useEffect(() => {
    console.log(userId);
  }, []);

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, picture: file });
      setSelectedFile(() => file);
    }
  };
  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitEdit = () => {
    const data = {
      selectedItem,
      ...formData,
    };
    console.log(data);
    setFormData({
      productName: "",
      stock: "",
      dateAdded: "",
      unitprice: "",
      stockprice: "",
      picture: null,
    });
    setSelectedItem(null);
    setCategory("");
  };

  return (
    <BaseModal userId={userId} isOpen={isOpen} closeModal={closeModal}>
      <div className="h-full">
        <div className="flex flex-col bg-themeWhite w-full h-full  items-center justify-center">
          <div className="flex items-center bg-[#00A45F]/10 justify-center px-4 py-3 w-full">
            <h2 className="bg-transparent text-[#00A45F] font-bold font-DMSans text-[16px] w-full text-left">
              Edit product
            </h2>
            <button className="bg-transparent" onClick={closeModal}>
              <Remove
                className="text-[20px] bg-transparent"
                onClick={closeModal}
              />
            </button>
          </div>
          <div className="w-full h-full overflow-y-auto bg-white lg:w-[350px] my-6">
            <div className="bg-white flex justify-between items-center">
              {/* <input type="file" name="picture" onChange={handlePictureChange} /> */}
              <div className="bg-inherit">
                {selectedFile ? (
                  <div className="bg-white">
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      exit={{ scale: 0 }}
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="w-[57px] h-[57px] rounded-[10px] border-[1px] border-themeGrey/20"
                    />
                  </div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    exit={{ scale: 0 }}
                    className="w-[57px] h-[57px] bg-white"
                  >
                    <label className="w-[57px] bg-white h-[57px]">
                      <input
                        type="file"
                        name="picture"
                        onChange={handlePictureChange}
                        className="hidden"
                        accept="image/*"
                      />
                      <div className="inset-0 cursor-pointer bg-white flex w-[57px] h-[57px] items-center  justify-center rounded-[10px] border-[1px]">
                        <Camera fontSize={20} className="bg-white" />
                      </div>
                    </label>
                  </motion.div>
                )}
              </div>
              <button
                className="text-[#415BE6] flex justify-end items-end"
                onClick={removeFile}
              >
                <Pencil className="bg-white text-[20px]" />
                <p className=" font-semibold text-[12px] bg-white">
                  Change Photo
                </p>
              </button>
            </div>
            <div className="mt-3 relative bg-inherit">
              <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
                Product Category
              </h2>
              <div
                className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                  isCategory !== "" ? "border-[#00A45F]" : "border-[#ddd]"
                }`}
                onClick={() => setIsProductCategory(!isProductCategory)}
              >
                {isCategory ? (
                  <p className="w-[80%] font-DMSans bg-inherit text-[#8F94A8] text-[12px]">
                    {isCategory}
                  </p>
                ) : (
                  <p className="w-[80%] font-DMSans bg-inherit text-[#8F94A8] text-[12px]">
                    Select Category
                  </p>
                )}
                {isProductCategory ? (
                  <FaChevronUp className="bg-inherit text-[#8F94A8] w-[5%]" />
                ) : (
                  <FaAngleDown className="bg-inherit text-[#8F94A8] w-[5%]" />
                )}
              </div>
            </div>
            <div className="relative">
              {isProductCategory && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: isProductCategory ? 1 : 0,
                    y: isProductCategory ? 0 : -20,
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full border-b-[1px] border-l-[1px] border-r-[1px] border-[#ddd] absolute bg-white z-20 h-auto overflow-y-auto rounded-b-[4px] p-2 shadow-lg"
                >
                  {category.map((item) => (
                    <button
                      className={`w-full px-2 py-3 bg-inherit flex justify-between items-center ${
                        selectedItem === item ? "bg-[#ddd]" : ""
                      }`}
                      onClick={() => handleSelect(item)}
                    >
                      <p className="font-DMSans bg-inherit text-[#25313E] text-[12px]">
                        {item}
                      </p>
                      <div
                        className={`h-3 w-3 rounded-full border-[3px] ${
                          selectedItem === item
                            ? "border-[#00A45F] bg-white"
                            : "border-[#ddd] bg-white"
                        }`}
                      ></div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            <div className="z-0 bg-white">
              <div className="mt-1 bg-inherit">
                <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
                  Product Name
                </h2>
                <div
                  className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                    formData.productName !== ""
                      ? "border-[#00A45F]"
                      : "border-[#ddd]"
                  }`}
                >
                  <input
                    type="text"
                    className="w-full h-full bg-inherit font-DMSans outline-none text-[#8F94A8] text-[12px]"
                    placeholder="Product Name"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="z-0 bg-white">
              <div className="mt-1  bg-inherit">
                <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
                  Total Stock
                </h2>
                <div
                  className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                    formData.stock !== "" ? "border-[#00A45F]" : "border-[#ddd]"
                  }`}
                >
                  <input
                    type="text"
                    className="w-full h-full bg-inherit font-DMSans outline-none text-[#8F94A8] text-[12px]"
                    placeholder="Total Stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="z-0 bg-white">
              <div className="mt-1  bg-inherit">
                <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
                  Date Added
                </h2>
                <div
                  className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                    formData.dateAdded !== ""
                      ? "border-[#00A45F]"
                      : "border-[#ddd]"
                  }`}
                >
                  <input
                    type="date"
                    className="w-full h-full bg-inherit font-DMSans outline-none text-[#8F94A8] text-[12px]"
                    placeholder="Date Added"
                    name="dateAdded"
                    value={formData.dateAdded}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="z-0 bg-white">
              <div className="mt-1  bg-inherit">
                <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
                  Price per unit
                </h2>
                <div
                  className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                    formData.unitprice !== ""
                      ? "border-[#00A45F]"
                      : "border-[#ddd]"
                  }`}
                >
                  <input
                    type="text"
                    className="w-full h-full bg-inherit font-DMSans outline-none text-[#8F94A8] text-[12px]"
                    placeholder="Price per unit"
                    name="unitprice"
                    value={formData.unitprice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="z-0 bg-white">
              <div className="mt-1 bg-inherit">
                <h2 className="text-[#25313E] bg-inherit font-DMSans text-[12px] font-semibold">
                  Stock Price
                </h2>
                <div
                  className={`border-[1.5px] px-2 flex justify-between items-center rounded-[4px] bg-inherit h-[35px] w-full cursor-pointer ${
                    formData.stockprice !== ""
                      ? "border-[#00A45F]"
                      : "border-[#ddd]"
                  }`}
                >
                  <input
                    type="text"
                    className="w-full h-full bg-inherit font-DMSans outline-none text-[#8F94A8] text-[12px]"
                    placeholder="Stock Price"
                    name="stockprice"
                    value={formData.stockprice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {formData.stockprice === "" ? (
          <div className="p-4 bg-white bottom-10 z-10 flex h-auto items-center justify-center gap-3">
            <button className="w-full disabled h-auto rounded-[10px] bg-[#ddd] sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3">
              <span className="text-[12px] font-semibold bg-inherit text-[#fff]">
                Save Changes
              </span>
            </button>
          </div>
        ) : (
          <div className="p-4 bg-white bottom-10 z-10 flex h-auto items-center justify-center gap-3">
            <BaseButton
              containerCLassName="w-full h-auto gap-2 rounded-[10px] bg-themeGreen sm:h-[46px] text-[#fff] [@media(max-width:800px)]:p-3 p-4"
              onClick={handleSubmitEdit}
            >
              <span className="text-[12px] font-semibold bg-inherit text-[#fff]">
                Save Changes
              </span>
            </BaseButton>
          </div>
        )}
      </div>
    </BaseModal>
  );
};
