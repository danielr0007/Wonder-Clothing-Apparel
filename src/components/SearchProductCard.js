import { useSelector } from "react-redux";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const SearchProductCard = function (props) {
  const { productinfo, productpics } = props;

  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div
      className={
        themeMode ? "dark" : "w-full mx-auto rounded-3xl hover:bg-white"
      }
    >
      <div className="sm:h-[260px] h-[150px] rounded-t-3xl">
        <img
          className="object-cover w-full h-full rounded-t-3xl"
          src={productpics}
          alt="product picture"
        />
      </div>

      <div className="p-4 text-white hover:text-black">
        <p className="pb-1 text-sm text-red">{productinfo.category}</p>
        <h4 className="md:text-lg text-base md:min-h-[55px] min-h-[70px]">
          {productinfo.title}
        </h4>
        <div className="mt-6 md:flex justify-between">
          <p className="md:pb-0 pb-2 md:text-sm text-base font-bold dark:text-l-beige">
            ${productinfo.price}
          </p>
          <div className="dark:text-l-beige flex justify-between">
            <span className="flex text-b-yellow">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />
            </span>
            <span className="text-xs pl-1">{productinfo.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProductCard;
