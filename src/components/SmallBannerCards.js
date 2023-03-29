import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { useSelector } from "react-redux";

const SmallBannerCards = ({ productinfo, bannercolors }) => {
  const themeMode = useSelector((state) => state.themeMode.value);
  let [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div
      onMouseOver={() => setHoverEffect(true)}
      onMouseOut={() => setHoverEffect(false)}
      className={
        themeMode
          ? `h-[150px] px-5 mt-5 mb-5  ${
              hoverEffect ? " bg-d-grey" : bannercolors
            } opacity-100 flex justify-between items-center rounded-lg dark`
          : `h-[150px] px-5 mt-5 mb-5 ${
              hoverEffect ? "bg-water" : bannercolors
            } opacity-80 flex justify-between items-center rounded-lg`
      }
    >
      <div className="">
        <h4 className=" text-xl font-semibold dark:text-white">
          {productinfo.title}
        </h4>
        <p className=" text-xs pb-2 dark:text-l-beige">Size: XL L M</p>
        <p className=" text-2xl font-light dark:text-l-beige">
          ${productinfo.price}
        </p>
      </div>

      <img
        className={`w-20 transition-transform duration-100 ease-in-out ${
          hoverEffect && " scale-125"
        }`}
        src={productinfo.images[2]}
      />
    </div>
  );
};

export default SmallBannerCards;
