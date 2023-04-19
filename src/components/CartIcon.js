import { useSelector } from "react-redux";

const CartIcon = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const cartCount = useSelector((state) => state.cart.items);
  return (
    <div className="fixed right-7 top-60 md:flex flex-col animate-bounce hidden">
      <lord-icon
        src="https://cdn.lordicon.com/xhbsnkyp.json"
        trigger="loop"
        style={{ width: "80px", height: "80px", display: "block" }}
      ></lord-icon>
      <div className="h-8 w-8 -mt-8 z-50 bg-red flex justify-center items-center rounded-full self-end">
        <p className="text-white">{cartCount.length}</p>
      </div>
    </div>
  );
};

export default CartIcon;
