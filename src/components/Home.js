import { useEffect, useState } from "react";
import {
  bannerContent,
  productDataApi,
  benefitsHomePageData,
  productPics,
} from "../constants";
import BigBannerCard from "./BigBannerCard";
import { useSelector } from "react-redux";
import BenefitHomeCards from "./BenefitHomeCards";
import SmProductCard from "./SmProductCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImgSlider from "./ImgSlider";
import HomeSecTitleAnimated from "./HomeSecTitleAnimated";
import TestimonialSlider from "./TestimonialSlider";
import SmallBannerSlider from "./SmallBannerSlider";
import Coupon from "./Coupon";
import SearchPage from "./SearchPage";
import CartIcon from "./CartIcon";
import CartSideBar from "./CartSideBar";

const Home = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const showSearch = useSelector((state) => state.search.value);
  const [ticker, setTicker] = useState(0);
  const [overlay, setOverlay] = useState(false);
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

  // ! Big banner slide logic
  const bigBannerMov = useEffect(() => {
    const bannerTicker = setTimeout(() => {
      ticker === 3 ? setTicker(0) : setTicker(ticker + 1);
    }, 5000);

    setOverlay(true);

    const overLayTicker = setTimeout(() => {
      setOverlay(false);
    }, 4850);

    return () => {
      clearTimeout(bannerTicker);
      clearTimeout(overLayTicker);
    };
  }, [ticker]);

  return (
    <div className={`${themeMode ? "bg-grey dark " : "bg-l-beige "}`}>
      <CartIcon />
      <section
        className={`pt-6 pb-7 lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="max-w-[1325px] mx-auto lg:flex lg:gap-9 md:gap-6">
          <div className="lg:h-auto h-[455px] lg:w-4/6 w-full relative">
            {ticker === 0 && <BigBannerCard bannerinfo={bannerContent[0]} />}
            {ticker === 1 && <BigBannerCard bannerinfo={bannerContent[1]} />}
            {ticker === 2 && <BigBannerCard bannerinfo={bannerContent[2]} />}
            {ticker === 3 && <BigBannerCard bannerinfo={bannerContent[3]} />}

            {/* Overlay ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

            <div
              className={
                overlay
                  ? `h-full w-full bg-l-beige dark:bg-grey absolute top-0 bottom-0 md:rounded-3xl rounded-2xl -translate-x-[1200px] transition-all duration-1000 ease-out`
                  : `h-full w-full bg-l-beige dark:bg-grey absolute top-0 bottom-0 md:rounded-3xl rounded-2xl`
              }
            ></div>

            {/* Dots ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

            <div className="w-52 h-6 absolute right-2/4 translate-x-2/4 bottom-8 flex justify-center gap-9">
              {bannerContent.map((ob, i) => {
                return (
                  <div
                    key={i}
                    data-index={i}
                    className={`w-4 h-4  rounded-full ${
                      ticker === i ? "bg-red" : "bg-white dark:bg-d-grey"
                    }`}
                    onClick={(e) => {
                      setTicker(Number(e.target.dataset.index));
                      setOverlay(false);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>

          {/* SMALL BANNER SECTION ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

          <div className="lg:w-2/6 pt-8">
            <div className="lg:py-0 w-full">
              <p className="py-1 px-5 md:mt-1 inline bg-gradient-to-r from-red to-yellow text-xs text-white rounded-2xl">
                New Arrivals
              </p>
            </div>

            <SmallBannerSlider />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

      <section className="pt-8 md:pb-7 pb-20 min-h-[335px] px-7 bg-l-beige dark:bg-grey ">
        <div className="h-full max-w-[1325px] mx-auto grid lg:grid-cols-4 grid-cols-2 justify-items-center gap-9">
          {[...Array(4)].map((e, i) => (
            <BenefitHomeCards key={i} cardinfo={benefitsHomePageData[i]} />
          ))}
        </div>
      </section>

      {/* HOT DEALS SECTION ////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}
      <section className="md:pt-10 pt-3 md:pb-7 pb-16 sm:px-7 px-3 bg-l-beige dark:bg-grey ">
        <div className="mx-auto lg:p-0 md:p-8 h-full xl:max-w-[1325px] ">
          {/* Section Title */}
          <HomeSecTitleAnimated
            title="Hot Deals"
            source="https://cdn.lordicon.com/tqywkdcz.json"
          />

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
            {clothingData?.products.slice(0, 8).map((product, i) => {
              return (
                <Link to={"/product/" + product.id} key={product?.id}>
                  <SmProductCard
                    productinfo={product}
                    productpics={productPics[i]}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-9 dark:text-white">
            <Link
              className="flex items-center justify-end gap-4"
              to="collections"
            >
              <p className="font-semibold text-yellow">See More</p>
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>

      {/* PROMOTIONS SECTION ////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}
      <section className="pt-3 md:pb-8 pb-1">
        <div className="mx-auto lg:p-0 md:p-8 h-full xl:max-w-[1325px]">
          <HomeSecTitleAnimated
            title="Promotions"
            source="https://cdn.lordicon.com/ftrbfost.json"
          />

          <ImgSlider />
        </div>
      </section>

      {/* POPULAR ITEMS SECTION ////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}
      <section className="md:pt-6 pt-2 md:pb-11 pb-24 sm:px-7 px-3 bg-l-beige dark:bg-grey">
        <div className="mx-auto lg:p-0 md:p-8 h-full xl:max-w-[1325px]">
          {/* Section Title */}
          <HomeSecTitleAnimated
            title="Popular Items"
            source="https://cdn.lordicon.com/xhbsnkyp.json"
          />

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
            {clothingData?.products.slice(10, 18).map((product, i) => {
              return (
                <Link to={"/product/" + product.id} key={product?.id}>
                  <SmProductCard
                    productinfo={product}
                    productpics={productPics.slice(10, 18)[i]}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-9 dark:text-white">
            <Link
              className="flex items-center justify-end gap-4"
              to="collections"
            >
              <p className="font-semibold text-yellow">See More</p>
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION ////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}
      <section className="pt-3 pb-24 sm:px-7 px-3 bg-l-beige dark:bg-grey">
        <div className="mx-auto lg:p-0 md:p-8 h-full xl:max-w-[1325px]">
          <h2 className="mb-14 text-center md:text-5xl text-2xl dark:text-white font-bold">
            From Our Customers
          </h2>

          <TestimonialSlider />
        </div>
      </section>

      {/* COUPON SECTION ////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

      <section className="pt-6 pb-24 sm:px-7 px-3 bg-l-beige dark:bg-grey">
        <div className="mx-auto lg:p-12 md:p-8 h-full xl:max-w-[1325px]">
          <Coupon />
        </div>
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
};

export default Home;
