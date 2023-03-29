import { useEffect, useRef, useState } from "react";
import { bannerContent, productDataApi } from "../constants";
import BigBannerCard from "./BigBannerCard";
import SmallBannerCards from "./SmallBannerCards";
import useFetchHook from "../utils/useFetchHook";
import { useSelector } from "react-redux";
import { smBannerCardColors } from "../constants";
import BenefitHomeCards from "./BenefitHomeCards";
import SmProductCard from "./SmProductCard";
import { benefitsHomePageData } from "../constants";

const Home = () => {
  const [ticker, setTicker] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [ticker2, setTicker2] = useState(0);
  const [ticker3, setTicker3] = useState(0);
  const numberOfBenefitsCards = 4;
  const themeMode = useSelector((state) => state.themeMode.value);

  const clothingData = useFetchHook(productDataApi);

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

  const smallBannerCardsMov = useEffect(() => {
    const smallBannerTicker = setTimeout(() => {
      ticker2 <= -850 ? setTicker2(680) : setTicker2(ticker2 - 170);
      ticker3 <= -1700 ? setTicker3(-170) : setTicker3(ticker3 - 170);
    }, 2300);

    return () => clearTimeout(smallBannerTicker);
  }, [ticker2]);

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <section className={`pt-6 pb-7 px-7 h-[593px] bg-l-beige dark:bg-grey `}>
        <div className="h-full max-w-[1325px] mx-auto md:flex gap-9">
          <div className="h-full w-4/6 relative">
            {ticker === 0 && <BigBannerCard bannerinfo={bannerContent[0]} />}
            {ticker === 1 && <BigBannerCard bannerinfo={bannerContent[1]} />}
            {ticker === 2 && <BigBannerCard bannerinfo={bannerContent[2]} />}
            {ticker === 3 && <BigBannerCard bannerinfo={bannerContent[3]} />}

            {/* Overlay ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

            <div
              className={
                overlay
                  ? `h-full w-full bg-l-beige dark:bg-grey absolute top-0 bottom-0 rounded-3xl  -translate-x-[1200px] transition-all duration-1000 ease-out`
                  : `h-full w-full bg-l-beige dark:bg-grey absolute top-0 bottom-0 rounded-3xl`
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

          <div className="h-full w-2/6">
            <div className=" w-full  items-center">
              <p className="py-1 px-5 mt-1 inline bg-gradient-to-r from-red to-yellow text-xs text-white rounded-2xl">
                New Arrivals
              </p>
            </div>

            <div className="h-[518px] overflow-hidden">
              {clothingData?.products.slice(0, 5).map((product, i) => {
                return (
                  <div
                    key={product?.id}
                    style={{
                      transform: `translate(0,${ticker2}px)`,
                      transition: "ease-in",
                      transitionDuration: "300ms",
                    }}
                    className={
                      ticker2 < -680 || ticker2 === 680
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  >
                    <SmallBannerCards
                      productinfo={product}
                      bannercolors={smBannerCardColors[i]}
                    />
                  </div>
                );
              })}

              {clothingData?.products.slice(0, 5).map((product, i) => {
                return (
                  <div
                    key={product?.id}
                    style={{
                      transform: `translate(0,${ticker3}px)`,
                      transition: "ease-in",
                      transitionDuration: "300ms",
                    }}
                    className={
                      ticker3 < -1530 || ticker3 === -170
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  >
                    <SmallBannerCards
                      productinfo={product}
                      bannercolors={smBannerCardColors[i]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

      <section className="pt-9 pb-7 min-h-[335px] px-7 bg-l-beige dark:bg-grey ">
        <div className="h-full max-w-[1325px] mx-auto grid lg:grid-cols-4 grid-cols-2 justify-items-center gap-9">
          {[...Array(numberOfBenefitsCards)].map((e, i) => (
            <BenefitHomeCards key={i} cardinfo={benefitsHomePageData[i]} />
          ))}
        </div>
      </section>

      {/* HOT DEALS SECTION ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}
      <section className="pt-6 pb-32 px-7 bg-l-beige dark:bg-grey ">
        <div className="mx-auto lg:p-0 md:p-8 h-full xl:max-w-[1325px] grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5 sm:text-yellow md:text-black border-2">
          <SmProductCard />
          <SmProductCard />
          <SmProductCard />
          <SmProductCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
