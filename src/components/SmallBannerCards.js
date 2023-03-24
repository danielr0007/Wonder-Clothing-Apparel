import { useSelector } from "react-redux";

const SmallBannerCards = ({ productinfo, bannercolors }) => {
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div
      className={
        themeMode
          ? `h-[150px] px-5 mt-5 mb-5 ${bannercolors} opacity-100 flex justify-between items-center rounded-lg dark`
          : `h-[150px] px-5 mt-5 mb-5 ${bannercolors} opacity-80 flex justify-between items-center rounded-lg`
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

      <img className="w-20" src={productinfo.images[2]} />
    </div>
  );
};

export default SmallBannerCards;
