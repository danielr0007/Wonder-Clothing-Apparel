import { useSelector } from "react-redux";
import WishListCard from "./WishListCard";
import { useState, useEffect } from "react";
import { productPics, productDataApi } from "../constants";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import SearchPage from "./SearchPage";
import CartSideBar from "./CartSideBar";

const WishList = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const showSearch = useSelector((state) => state.search.value);
  const wishListProducts = useSelector((state) => state.wishList.items);
  const [clothingData, setClothingData] = useState(null);

  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data;

      setClothingData(product);
    }
    getProductData();
  }, []);

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section
        className={`pt-6 h-[850px] lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="md:mb-8 max-w-[1250px] mx-auto">
          <h1 className="md:mt-16 mt-20 md:pb-32 pb-16 lg:text-5xl md:text-4xl text-3xl  dark:text-white font-bold text-center">
            My Wishlist
          </h1>

          {wishListProducts.length === 0 ? (
            <div className="flex flex-col items-center">
              <h2 className="md:mb-12 mb-16 md:text-3xl text-2xl text-center dark:text-white">
                You have no items in your Wishlist!
              </h2>

              <Link
                to="/collections"
                className="py-3 px-9 bg-red rounded-lg text-white"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {wishListProducts.map((product, i) => {
                return (
                  <WishListCard
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    rating={product.rating}
                    price={product.price}
                    images={productPics[product?.id - 1]}
                    product={product}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
};

export default WishList;
