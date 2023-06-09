import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import { productDataApi } from "../constants";
import { useEffect, useState } from "react";
import SearchPage from "./SearchPage";
import CartSideBar from "./CartSideBar";

const Contact = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const showSearch = useSelector((state) => state.search.value);
  const [clothingData, setClothingData] = useState(null);

  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data;

      setClothingData(product);
    }
    getProductData();
  }, []);
  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section
        className={`pt-6 md:pb-7 pb-20 lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="md:mb-8 max-w-[1150px] mx-auto">
          <h1 className="md:mt-4 mt-6 md:pb-12 pb-14 lg:text-5xl text-3xl dark:text-white font-bold text-center">
            Contact Us
          </h1>

          <div className="lg:flex gap-14">
            <div className="p-4 lg:w-96 lg:h-96 w-full lg:mx-0 mx-auto bg-white dark:bg-d-grey rounded-xl shadow-sm">
              <img
                className="w-full"
                src="https://drive.google.com/uc?export=view&id=1RlZlJdUCM-NxMHm2iclRTLqXAxpaNAnQ"
                alt=""
              />
            </div>

            <div className="flex-1 lg:pt-0 pt-12">
              <input
                className="w-full p-2 dark:bg-l-grey mb-3 py-2 block rounded-md border-l-grey border-[1px]"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full p-2 dark:bg-l-grey mb-3 py-2 block rounded-md border-l-grey border-[1px]"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="mb-10 p-2 dark:bg-l-grey block w-full rounded-md border-l-grey border-[1px]"
                name=""
                id=""
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="text-sm text-white py-3 px-16 rounded-md bg-navy lg:inline lg:mx-0 block mx-auto">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
};

export default Contact;
