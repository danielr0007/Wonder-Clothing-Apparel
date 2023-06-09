import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SmallBannerCards = ({ productinfo, bannercolors, bannerpics }) => {
  const themeMode = useSelector((state) => state.themeMode.value);
  let [hoverEffect, setHoverEffect] = useState(false);

  return (
    <Link to={"/product/" + productinfo.id}>
      <div
        onMouseOver={() => setHoverEffect(true)}
        onMouseOut={() => setHoverEffect(false)}
        className={
          themeMode
            ? `h-[150px] px-5 mt-5 mb-5  ${
                hoverEffect ? " bg-d-grey" : bannercolors
              } opacity-100 flex justify-between items-center lg:rounded-lg rounded-md dark`
            : `h-[150px] px-5 md:mt-5 mt-3 mb-5 ${
                hoverEffect ? "bg-water" : bannercolors
              } opacity-80 flex justify-between items-center lg:rounded-lg rounded-md`
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
          className={`w-28 transition-transform duration-100 ease-in-out ${
            hoverEffect && "scale-125"
          }`}
          src={bannerpics}
        />
      </div>
    </Link>
  );
};

export default SmallBannerCards;
