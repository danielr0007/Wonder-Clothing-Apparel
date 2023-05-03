import React, { useState } from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { BsFillTrash3Fill } from "react-icons/bs";
import { removeFromWish } from "../utils/wishList";
import { addItem } from "../utils/cart";
import { useDispatch } from "react-redux";

function WishListCard(props) {
  const [showCardButtons, setShowCardButtons] = useState(false);

  function showCardB() {
    if (!showCardButtons) setShowCardButtons(true);
  }

  function removeCardB() {
    if (showCardButtons) setShowCardButtons(false);
  }

  return (
    <div
      onMouseEnter={showCardB}
      onMouseLeave={removeCardB}
      className="p-4 flex gap-6 bg-white rounded-lg relative dark:bg-d-beige"
    >
      <div className="basis-2/6">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={props.images}
          alt="product picture"
        />
      </div>

      <div className="basis-4/6 w-full flex flex-col justify-between">
        <div className="dark:text-black">
          <p className="pb-1 text-sm text-red">{props.category}</p>
          <h4 className="text-sm">{props.title}</h4>
        </div>

        <p className="md:pb-0 pb-2 md:text-lg text-base font-bold dark:text-black">
          ${props.price}
        </p>

        <div className="dark:text-black flex justify-between">
          <span className="flex text-b-yellow dark:text-white">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </span>
          <span className="text-xs pl-1">{props.rating}</span>
        </div>
      </div>
      <CardOverlay showTrigger={showCardButtons} product={props.product} />
    </div>
  );
}

export default WishListCard;

const CardOverlay = function (props) {
  const dispatch = useDispatch();

  return (
    <div
      // onMouseOut={props.removeFunction}
      className={`absolute ${
        props.showTrigger ? "opacity-100" : "opacity-0"
      } rounded-lg top-0 bottom-0 left-0 right-0 text-sm bg-t-white dark:bg-t-black flex justify-center items-center transition-opacity ease-in duration-150`}
    >
      <div className="w-full flex justify-center gap-3">
        <button
          onClick={() => {
            dispatch(addItem(props.product));
            dispatch(removeFromWish(props.product));
          }}
          className="py-3 w-4/6 rounded-md bg-blue dark:bg-navy text-white"
        >
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(removeFromWish(props.product))}
          className="py-3 px-5 rounded-md bg-red"
        >
          <BsFillTrash3Fill className="text-xl text-white dark:text-black" />
        </button>
      </div>
    </div>
  );
};
