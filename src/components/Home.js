import { useEffect, useRef, useState } from "react";
import { bannerContent, productDataApi } from "../constants";
import BigBannerCard from "./BigBannerCard";
import SmallBannerCards from "./SmallBannerCards";
import useFetchHook from "../utils/useFetchHook";
import { smBannerCardColors } from "../constants";
import BenefitHomeCards from "./BenefitHomeCards";

const Home = () => {
  const [ticker, setTicker] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [ticker2, setTicker2] = useState(0);
  const [ticker3, setTicker3] = useState(0);
  const numberOfBenefitsCards = 4;

  const clothingData = useFetchHook(productDataApi);

  const bigBannerMov = useEffect(() => {
    setTimeout(() => {
      ticker === 3 ? setTicker(0) : setTicker(ticker + 1);
    }, 5000);

    setOverlay(true);

    setTimeout(() => {
      setOverlay(false);
    }, 4850);
  }, [ticker]);

  const smallBannerCardsMov = useEffect(() => {
    setTimeout(() => {
      ticker2 <= -850 ? setTicker2(680) : setTicker2(ticker2 - 170);
    }, 2600);

    setTimeout(() => {
      ticker3 <= -1700 ? setTicker3(-170) : setTicker3(ticker3 - 170);
    }, 2600);
  }, [ticker2]);

  return (
    <div className="">
      <section className="pt-6 pb-7 px-7 h-[593px] bg-l-beige ">
        <div className="h-full max-w-[1325px] mx-auto flex gap-9">
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
                  ? `h-full w-full bg-l-beige absolute top-0 bottom-0 rounded-3xl  -translate-x-[1000px] transition-all duration-1000 ease-out`
                  : `h-full w-full bg-l-beige absolute top-0 bottom-0 rounded-3xl translate-x-0 transition-opacity duration-1000 ease-in`
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
                      ticker === i ? "bg-red" : "bg-white"
                    }`}
                    onClick={(e) => {
                      console.log(e.target.dataset.index);
                      setTicker(e.target.dataset.index);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>

          {/* SMALL BANNER SECTION ///////////////////////////////////////////////
              //////////////////////////////////////////////////////// */}

          <div className="h-full w-2/6 ">
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

      <section className="pt-6 pb-7 px-7 h-[325px] bg-l-beige ">
        <div className="h-full max-w-[1325px] mx-auto  flex justify-center items-center gap-12">
          {[...Array(numberOfBenefitsCards)].map((e, i) => (
            <BenefitHomeCards key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
