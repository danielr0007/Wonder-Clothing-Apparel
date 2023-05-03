import React, { useEffect, useState } from "react";
import {
  BsFillPatchPlusFill,
  BsPatchMinus,
  BsFillTrashFill,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideCart } from "../utils/sideCartVisible";
import sideCartImage from "../assets/sidecart-image.png";
import { Link } from "react-router-dom";
import { productPics } from "../constants";
import { addItem, removeAllItem, decreaseCart, getTotals } from "../utils/cart";

function CartSideBar() {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotalAmount);
  const sideCartVisible = useSelector((state) => state.sideCartVisible.value);
  const dispatch = useDispatch();

  // ! Gets calculated cart totals from redux store
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div
      className={`${
        sideCartVisible ? "block" : "hidden"
      } h-full xl:w-3/12 lg:w-5/12 md:w-7/12 w-9/12 bg-water dark:bg-d-grey fixed top-0 bottom-0 right-0 z-50 overflow-scroll`}
    >
      {cartItems.length !== 0 ? (
        <div className="p-5">
          <div className="mb-4 flex justify-end text-white text-sm">
            <button
              onClick={() => dispatch(toggleSideCart())}
              className="h-7 w-7 bg-red rounded-full flex items-center justify-center"
            >
              x
            </button>
          </div>

          <div className="mb-8 text-center dark:text-white">
            <h4 className="mb-1 text-xl font-semibold">Your Shopping Cart</h4>
            <p>
              Selected Items:
              <span className="pl-1 font-semibold">TBD</span>
            </p>
          </div>
          {/* Product cards section */}
          <div className="mb-8">
            {cartItems
              .filter((value, index) => cartItems.indexOf(value) === index)
              .map((item) => {
                return (
                  <CartCard
                    key={item.id}
                    info={item}
                    images={productPics[item?.id - 1]}
                    allcartitems={cartItems}
                  />
                );
              })}
          </div>

          <div className="mb-12 flex gap-7 items-center dark:text-white">
            <p className="text-base">Subtotal</p>
            <h3 className="text-4xl font-bold">${cartTotal}</h3>
          </div>

          <div>
            <button className="mb-3 w-full py-3 block border-navy hover:bg-l-green dark:border-yellow dark:hover:bg-d-purple dark:text-yellow border-2 rounded-lg text-sm">
              Go to Cart
            </button>
            <button className="w-full py-3 block bg-navy dark:hover:bg-l-grey hover:bg-blue dark:hover:text-black rounded-lg text-sm text-white">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        // ! Empty cart UI///////////////////////////////////////////////
        <div className="p-5 h-full">
          <div className="mb-4 flex justify-end text-white text-sm">
            <button
              onClick={() => dispatch(toggleSideCart())}
              className="h-7 w-7 bg-red rounded-full flex items-center justify-center"
            >
              x
            </button>
          </div>

          <div className="mb-14 text-center">
            <h4 className="mb-1 text-xl font-semibold">Your Shopping Cart</h4>
            <p>
              Selected Items:
              <span className="pl-1 font-semibold">{cartItems.length}</span>
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
  // const allCartItems = props.allcartitems;
  const titleOfCurrentProduct = props.info.title;
  const currentProductData = props.info;

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addItem(currentProductData));
  }

  function removeEntireProductFromCart() {
    dispatch(removeAllItem(currentProductData));
  }

  function decreaseAndRemoveFromCart() {
    dispatch(decreaseCart(currentProductData));
  }

  return (
    <div className="p-2 mb-2 bg-l-beige dark:bg-d-beige grid grid-cols-6 items-center rounded-lg">
      <div className="col-span-5 flex gap-4">
        <div className="h-20 w-16 dark:bg-d-beige">
          <img
            className=" object-cover w-full h-full"
            src={props.images}
            alt="images of cart product"
          />
        </div>

        <div className="w-full flex flex-col justify-between ">
          <p className="text-sm font-semibold">{titleOfCurrentProduct}</p>
          <p className="text-lg font-light">${props.info.price}</p>
          <div className="w-3/12 flex justify-between items-center">
            <BsPatchMinus onClick={decreaseAndRemoveFromCart} />
            <p>{currentProductData.cartQuantity}</p>
            <BsFillPatchPlusFill onClick={addToCart} />
          </div>
        </div>
      </div>

      <BsFillTrashFill
        onClick={removeEntireProductFromCart}
        className="mr-1 text-xl justify-self-end"
      />
    </div>
  );
};
