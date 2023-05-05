import React from "react";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { productPics, productDataApi } from "../constants";
import SearchPage from "./SearchPage";
import CartSideBar from "./CartSideBar";
import { getTotals, addItem, removeAllItem, decreaseCart } from "../utils/cart";

function CartPage() {
  const themeMode = useSelector((state) => state.themeMode.value);
  const cart = useSelector((state) => state.cart);
  const showSearch = useSelector((state) => state.search.value);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotalAmount);

  const dispatch = useDispatch();

  // ! Gets calculated cart totals from redux store
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const [clothingData, setClothingData] = useState(null);

  // ! Fetches data from API and sets it in clothingData state variable
  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data;

      setClothingData(product);
    }
    getProductData();
  }, []);
  console.log(clothingData);

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section
        className={`pt-6 h-[800px] lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="md:mb-8 max-w-[1250px] mx-auto flex flex-col">
          <h1 className="md:mt-16 mt-10 md:pb-32 pb-16 lg:text-5xl md:text-4xl text-3xl  dark:text-white font-bold text-center">
            My Cart
          </h1>

          <div className="p-3 flex gap-16 bg-d-beige dark:bg-navy dark:text-white text-sm font-semibold rounded-t-lg overflow-hidden">
            <div className="min-w-[470px]">
              <p className="">Product</p>
            </div>
            <div className="min-w-[155px]">
              <p className="">Price</p>
            </div>
            <div className="min-w-auto">
              <p className="">Quantity</p>
            </div>
          </div>

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

          <TotalCostComponent />
        </div>
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
}

export default CartPage;

function CartCard(props) {
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
    <div className="p-4 flex gap-16 bg-white dark:bg-l-grey overflow-scroll">
      <div className="min-w-[470px] flex items-center gap-4 col-span-5">
        <div className="h-12 w-12 rounded-2xl">
          <img className="rounded-2xl" src={props.images} alt="" />
        </div>
        <div>
          <h2 className="font-semibold">{titleOfCurrentProduct}</h2>
          <p className="text-sm">
            size: <span>40</span>
          </p>
          <p className="text-sm">
            Color: <span>blue</span>
          </p>
        </div>
      </div>

      <div className="min-w-[155px] col-span-2 flex items-center">
        <h4 className="text-3xl font-semibold">${props.info.price}</h4>
      </div>

      <div className="min-w-auto flex items-center gap-28">
        <div className="flex gap-3 items-center">
          <div
            onClick={decreaseAndRemoveFromCart}
            className="w-10 h-9 bg-blue dark:bg-grey text-white flex items-center cursor-pointer justify-center active:animate-bounce"
          >
            -
          </div>
          <p className="w-5 flex justify-center">
            {currentProductData.cartQuantity}
          </p>
          <div
            onClick={addToCart}
            className="w-10 h-9 bg-blue dark:bg-grey text-white cursor-pointer flex items-center justify-center active:animate-bounce"
          >
            +
          </div>
        </div>

        <Link
          className="text-sm p-2 hover:bg-l-grey dark:hover:bg-white rounded-lg"
          to={"/product/" + props.info.id}
        >
          Details
        </Link>

        <BsFillTrashFill
          onClick={removeEntireProductFromCart}
          className="mr-1 text-xl dark:text-red justify-self-end cursor-pointer"
        />
      </div>
    </div>
  );
}

function TotalCostComponent() {
  return (
    <div className="lg:w-4/12 md:w-8/12 w-full p-4 mt-20 md:self-end self-none md:mx-0 mx-auto bg-white flex justify-center items-center rounded-lg shadow-xl">
      <div className="py-10 px-4 w-full flex flex-col items-center gap-10">
        <div className="flex items-center gap-2">
          <p className="text-lg">Subtotal</p>
          <p className="text-4xl font-bold">$300</p>
        </div>

        <button className="w-full py-3 block bg-navy dark:hover:bg-l-grey hover:bg-blue dark:hover:text-black rounded-lg text-sm text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}
