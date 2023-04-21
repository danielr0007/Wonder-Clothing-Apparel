import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cart";
import { addToWish, removeFromWish } from "../utils/wishList";
import { useParams } from "react-router-dom";
import { BsHandbag, BsHeart, BsCart, BsFillHeartFill } from "react-icons/bs";
import { productPics, productDataApi } from "../constants";
import { Link } from "react-router-dom";
import SmProductCard from "./SmProductCard";
import ReviewCardContainer from "./ReviewCard";
import CartIcon from "./CartIcon";
import Coupon from "./Coupon";

const ProductPage = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const cartCount = useSelector((state) => state.cart.items);
  const [currentProductData, setCurrentProductData] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWish, setAddedToWish] = useState(false);
  const [clothingData, setClothingData] = useState(null);
  const [productInfoShown, setProductInfoShown] = useState({
    description: true,
    stock: false,
    review: false,
  });

  const { Id } = useParams();
  const numberOfSimilarProducts = Number(Id) + 4;

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data?.products.filter((pro) => {
        return pro.id === Number(Id);
      });

      setCurrentProductData(product[0]);
      setClothingData(data);
    }
    getProductData();
  }, []);

  function addToCart() {
    setAddedToCart(true);
    dispatch(addItem(currentProductData));
  }

  function removeFromCart() {
    dispatch(removeItem(currentProductData));
    cartCount.length === 1 ? setAddedToCart(false) : setAddedToCart(true);
  }

  function addToWishList() {
    setAddedToWish(true);
    dispatch(addToWish(currentProductData));
  }

  function removeFromWishList() {
    setAddedToWish(false);
    dispatch(removeFromWish(currentProductData));
  }

  function showDescription() {
    setProductInfoShown({ description: true, stock: false, review: false });
  }

  function showStock() {
    setProductInfoShown({ description: false, stock: true, review: false });
  }

  function showReview() {
    setProductInfoShown({ description: false, stock: false, review: true });
  }

  return (
    <div className={`${themeMode ? "pb-20 bg-grey dark" : "pb-20 bg-l-beige"}`}>
      <CartIcon />
      <section className={`pt-6 lg:px-7 md:px-7 px-4 bg-l-beige dark:bg-grey`}>
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-8">
          {/* Image//////////////////////////////////// */}
          <div className="pb-20 lg:w-[510px] lg:h-[530px] col-span-6">
            <img
              className="w-full"
              src={productPics[Id - 1]}
              alt="product image"
            />
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
                  className="py-2 px-20 flex items-center cursor-pointer justify-center gap-3 bg-blue hover:bg-red transition-all ease-in duration-100 dark:bg-d-green dark:hover:bg-l-grey text-white dark:hover:text-black rounded-lg"
                >
                  <BsCart className=" text-lg" />
                  <p className=" text-sm ">Add to Cart</p>
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
                    className="w-10 h-11 bg-peach flex items-center cursor-pointer justify-center active:animate-bounce"
                  >
                    -
                  </div>
                  <p className="w-5 flex justify-center dark:text-white">
                    {cartCount.length}
                  </p>
                  <div
                    onClick={addToCart}
                    className="w-10 h-11 bg-peach cursor-pointer flex items-center justify-center active:animate-bounce"
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
              <div
                onClick={showDescription}
                className={`px-6 py-1 border-b-2 ${
                  productInfoShown.description
                    ? "text-red border-b-black dark:border-l-grey"
                    : "border-b-l-grey text-l-grey hover:text-navy dark:text-d-grey dark:border-d-grey dark:hover:text-l-grey"
                }  cursor-pointer`}
              >
                <p className="text-sm">Description</p>
              </div>
              <div
                onClick={showStock}
                className={`px-6 py-1 border-b-2 ${
                  productInfoShown.stock
                    ? "text-red border-b-black dark:border-l-grey"
                    : "border-b-l-grey text-l-grey hover:text-navy dark:text-d-grey dark:border-d-grey dark:hover:text-l-grey"
                } dark:border-l-grey cursor-pointer`}
              >
                <p className="text-sm"># In-Stock</p>
              </div>
              <div
                onClick={showReview}
                className={`px-6 py-1 border-b-2 ${
                  productInfoShown.review
                    ? "text-red border-b-blackdark:border-l-grey"
                    : "border-b-l-grey text-l-grey hover:text-navy dark:text-d-grey dark:border-d-grey dark:hover:text-l-grey"
                } dark:border-l-grey cursor-pointer`}
              >
                <p className="text-sm">Review</p>
              </div>
            </div>

            {productInfoShown.description && (
              <p className="mb-24 dark:text-white">
                {currentProductData?.description}
              </p>
            )}

            {productInfoShown.stock && (
              <p className="mb-24 dark:text-white">
                #{currentProductData?.stock} in stock
              </p>
            )}

            {productInfoShown.review && <ReviewCardContainer />}
          </div>
        </div>
      </section>

      {/* SIMILAR PRODUCTS SECTION//////////////////////////////////////// */}
      <section className="md:pt-6 pt-2 md:pb-11 pb-24 sm:px-7 px-3 bg-l-beige dark:bg-grey">
        {/* Section Title */}
        <div className="mx-auto lg:p-0 md:p-8 h-full max-w-[1250px]">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
            {clothingData?.products
              .slice(Id, numberOfSimilarProducts)
              .map((product, i) => {
                return (
                  <Link to={"/product/" + product.id} key={product?.id}>
                    <SmProductCard
                      productinfo={product}
                      productpics={productPics[product?.id - 1]}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* COUPON SECTION ////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

      <section className="pt-6 pb-5 sm:px-7 px-3 bg-l-beige dark:bg-grey">
        <div className="mx-auto lg:p-12 md:p-8 h-full xl:max-w-[1325px]">
          <Coupon />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
