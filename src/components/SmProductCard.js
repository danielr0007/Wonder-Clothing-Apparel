import { useSelector } from "react-redux";

const SmProductCard = function () {
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div className={themeMode ? " dark" : "w-full mx-auto"}>
      <div className="sm:h-[260px] h-[150px]">
        <div className="w-full h-full bg-red rounded-lg"></div>
      </div>

      <div className="p-4">
        <p className="text-sm text-red">Adidas</p>
        <h4 className="text-lg dark:text-l-beige">Ultraboost 22 Shoes</h4>
        <div className="mt-6 flex justify-between">
          <p className=" text-sm font-bold dark:text-l-beige">$130 USD</p>
          <div className="dark:text-l-beige">***** - 2312</div>
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
