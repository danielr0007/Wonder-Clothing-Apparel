import { useSelector, useDispatch } from "react-redux";
import { toggleSideCart } from "../utils/sideCartVisible";

const CartIcon = () => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(toggleSideCart())}
      className="fixed right-7 top-60 md:flex flex-col animate-bounce hidden cursor-pointer z-50"
    >
      <lord-icon
        src="https://cdn.lordicon.com/xhbsnkyp.json"
        trigger="loop"
        style={{ width: "80px", height: "80px", display: "block" }}
      ></lord-icon>
      <div className="h-8 w-8 -mt-8 z-50 bg-red flex justify-center items-center rounded-full self-end">
        <p className="text-white">{cartTotalQuantity}</p>
      </div>
    </div>
  );
};

export default CartIcon;
