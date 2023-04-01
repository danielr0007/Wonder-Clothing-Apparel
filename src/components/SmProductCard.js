import { useSelector } from "react-redux";

const SmProductCard = function (props) {
  const { productinfo, productpics } = props;

  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div className={themeMode ? " dark" : "w-full mx-auto rounded-3xl"}>
      <div className="sm:h-[260px] h-[150px] rounded-3xl">
        <img
          className=" object-cover w-full h-full rounded-3xl"
          src={productpics}
          alt=""
        />
      </div>

      <div className="p-4">
        <p className="pb-1 text-sm text-red">{productinfo.category}</p>
        <h4 className="text-lg dark:text-l-beige">{productinfo.title}</h4>
        <div className="mt-6 flex justify-between">
          <p className=" text-sm font-bold dark:text-l-beige">
            ${productinfo.price}
          </p>
          <div className="dark:text-l-beige">***** - 2312</div>
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
