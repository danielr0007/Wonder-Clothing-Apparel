import { useSelector } from "react-redux";

const CartIcon = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const cartCount = useSelector((state) => state.cart.items);
  return (
    <div className="absolute right-7 top-64 flex flex-col animate-bounce">
      <div className="w-14 h-14 bg-yellow"></div>
      <div className="h-8 w-8 -mt-5 -mr-3 bg-red flex justify-center items-center rounded-full self-end">
        <p className="text-white">{cartCount.length}</p>
      </div>
    </div>
  );
};

export default CartIcon;
