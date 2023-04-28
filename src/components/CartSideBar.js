import React from "react";
import {
  BsFillPatchPlusFill,
  BsPatchMinus,
  BsFillTrashFill,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../utils/sideCartVisible";
import sideCartImage from "../assets/sidecart-image.png";
import { Link } from "react-router-dom";

function CartSideBar() {
  const cartCount = useSelector((state) => state.cart.items);
  const themeMode = useSelector((state) => state.themeMode.value);
  const sideCartVisible = useSelector((state) => state.sideCartVisible.value);

  const dispatch = useDispatch();

  return (
    <div
      className={`${
        sideCartVisible ? "block" : "hidden"
      } h-full xl:w-3/12 lg:w-5/12 md:w-7/12 w-9/12 bg-water fixed top-0 bottom-0 right-0 z-50 overflow-scroll`}
    >
      {cartCount.length !== 0 ? (
        <div className="p-5">
          <div className="mb-4 flex justify-end text-white text-sm">
            <button
              onClick={() => dispatch(toggle())}
              className="h-7 w-7 bg-red rounded-full flex items-center justify-center"
            >
              x
            </button>
          </div>

          <div className="mb-8 text-center">
            <h4 className="mb-1 text-xl font-semibold">Your Shopping Cart</h4>
            <p>
              Selected Items:
              <span className="pl-1 font-semibold">{cartCount.length}</span>
            </p>
          </div>
          {/* Product cards section */}
          <div className="mb-8">
            <CartCard cartcount={cartCount.length} />
          </div>

          <div className="mb-12 flex gap-7 items-center">
            <p className="text-base">Subtotal</p>
            <h3 className="text-4xl font-bold">$248.99</h3>
          </div>

          <div>
            <button className="mb-3 w-full py-3 block border-navy border-2 rounded-lg text-sm">
              Go to Cart
            </button>
            <button className="w-full py-3 block bg-navy rounded-lg text-sm text-white">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 h-full border-2">
          <div className="mb-4 flex justify-end text-white text-sm">
            <button
              onClick={() => dispatch(toggle())}
              className="h-7 w-7 bg-red rounded-full flex items-center justify-center"
            >
              x
            </button>
          </div>

          <div className="mb-14 text-center">
            <h4 className="mb-1 text-xl font-semibold">Your Shopping Cart</h4>
            <p>
              Selected Items:
              <span className="pl-1 font-semibold">{cartCount.length}</span>
            </p>
          </div>

          <img
            className="w-5/6 mb-8 mx-auto"
            src={sideCartImage}
            alt="Image of shopping cart"
          />

          <h2 className="mb-14 text-2xl font-semibold text-center">
            Your Shopping Cart is Empty
          </h2>

          <Link
            to="collections"
            className="py-3 w-5/12 mx-auto text-center bg-red rounded-lg text-white block"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartSideBar;

const CartCard = function (props) {
  return (
    <div className="p-2 bg-l-beige grid grid-cols-6 items-center rounded-lg">
      <div className="col-span-5 flex gap-4">
        <div>
          <div className="h-20 w-16 bg-red"></div>
        </div>

        <div className="w-full flex flex-col justify-between ">
          <p className="text-sm font-semibold">Elegant Dress</p>
          <p className="text-lg font-light">$339</p>
          <div className="w-3/12 flex justify-between items-center">
            <BsFillPatchPlusFill />
            <p>0</p>
            <BsPatchMinus />
          </div>
        </div>
      </div>

      <BsFillTrashFill className="mr-1 text-xl justify-self-end" />
    </div>
  );
};
