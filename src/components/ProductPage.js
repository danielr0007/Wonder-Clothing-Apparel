import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cart";
import { addToWish, removeFromWish } from "../utils/wishList";
import { useParams } from "react-router-dom";
import { BsHandbag, BsHeart, BsCart, BsFillHeartFill } from "react-icons/bs";
import { productPics, productDataApi } from "../constants";
import CartIcon from "./CartIcon";

const ProductPage = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const [currentProductData, setCurrentProductData] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [addedToWish, setAddedToWish] = useState(false);

  const { Id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data?.products.filter((pro) => {
        return pro.id === Number(Id);
      });

      setCurrentProductData(product[0]);
    }
    getProductData();
  }, []);

  function addToCart() {
    setAddedToCart(true);
    setQuantity(quantity + 1);
    dispatch(addItem(currentProductData));
  }

  function removeFromCart() {
    dispatch(removeItem(currentProductData));

    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  }

  function addToWishList() {
    setAddedToWish(true);
    dispatch(addToWish(currentProductData));
  }
  function removeFromWishList() {
    setAddedToWish(false);
    dispatch(removeFromWish(currentProductData));
  }

  return (
    <div className={`${themeMode ? "pb-20 bg-grey dark" : "pb-20 bg-l-beige"}`}>
      <CartIcon />
      <section className={`pt-6 lg:px-7 md:px-10 px-3 bg-l-beige dark:bg-grey`}>
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-8">
          {/* Image//////////////////////////////////// */}
          <div className="w-[510px] h-[530px] col-span-6">
            <img src={productPics[Id - 1]} alt="" />
          </div>

          {/* Product INFO////////////////////////////// */}
          <div className="col-span-6">
            <p className="mt-3 pb-1 text-sm text-red">
              {currentProductData?.brand}
            </p>
            <h2 className="pb-8 text-3xl font-semibold dark:text-white">
              {currentProductData?.title}
            </h2>
            <h3 className="mb-20 text-4xl dark:text-white">
              ${currentProductData?.price}.00
            </h3>

            {/* Color picker////////////////////////////// */}
            <div className="pb-10">
              <p className="pb-3 text-red font-semibold">Color</p>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-b-olive rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-red rounded-full cursor-pointer"></div>
              </div>
            </div>

            {/* Wishlist & Add to cart///////////////////// */}
            {addedToCart || (
              <div className="pb-16 flex gap-7">
                {/* add to cart */}

                <div
                  onClick={addToCart}
                  className="py-2 px-20 flex items-center cursor-pointer justify-center gap-3 bg-blue dark:bg-d-green rounded-lg"
                >
                  <BsCart className="text-white text-lg" />
                  <p className="text-white text-sm ">Add to Cart</p>
                </div>

                {!addedToWish ? (
                  <div
                    onClick={addToWishList}
                    className="p-4 flex items-center bg-white cursor-pointer dark:bg-l-grey rounded-lg"
                  >
                    <BsHeart className="text-lg text-red" />
                  </div>
                ) : (
                  <div
                    onClick={removeFromWishList}
                    className="p-4 flex items-center bg-white cursor-pointer dark:bg-l-grey rounded-lg"
                  >
                    <BsFillHeartFill className="text-lg text-red" />
                  </div>
                )}
              </div>
            )}
            {/* Quantity & Go to cart///////////////////// */}
            {addedToCart && (
              <div className="pb-16 flex gap-14">
                <div className="flex gap-3 items-center">
                  <div
                    onClick={removeFromCart}
                    className="w-10 h-11 bg-peach flex items-center cursor-pointer justify-center"
                  >
                    -
                  </div>
                  <p className="w-5 flex justify-center">{quantity}</p>
                  <div
                    onClick={addToCart}
                    className="w-10 h-11 bg-peach cursor-pointer flex items-center justify-center"
                  >
                    +
                  </div>
                </div>
                {/* go to cart */}

                <div className="py-2 px-20 flex items-center justify-center gap-3 bg-grey dark:bg-d-purple rounded-lg cursor-pointer">
                  <BsHandbag className="text-white text-lg" />
                  <p className="text-white text-sm ">Go to Cart</p>
                </div>
              </div>
            )}
            {/* Decrip/Review/Specifics//////////////////////////// */}
            <div className="pb-5 flex">
              <div className="px-6 py-1 border-b-2 dark:border-l-grey">
                <p className="text-sm dark:text-white">Description</p>
              </div>
              <div className="px-6 py-1 border-b-2 dark:border-l-grey">
                <p className="text-sm dark:text-white"># In-Stock</p>
              </div>
              <div className="px-6 py-1 border-b-2 dark:border-l-grey">
                <p className="text-sm dark:text-white">Review</p>
              </div>
            </div>

            <p className="dark:text-white">{currentProductData?.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
