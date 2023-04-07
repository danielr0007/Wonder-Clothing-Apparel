import { useEffect, useState } from "react";
import { productDataApi } from "../constants";
import SmallBannerCards from "./SmallBannerCards";
import useFetchHook from "../utils/useFetchHook";
import { smBannerCardColors } from "../constants";

const SmallBannerSlider = function () {
  const clothingData = useFetchHook(productDataApi);
  const [ticker2, setTicker2] = useState(0);
  const [ticker3, setTicker3] = useState(0);

  const smallBannerCardsMov = useEffect(() => {
    if (window.innerWidth < 1024) return;

    const smallBannerTicker = setTimeout(() => {
      ticker2 <= -850 ? setTicker2(680) : setTicker2(ticker2 - 170);
      ticker3 <= -1700 ? setTicker3(-170) : setTicker3(ticker3 - 170);
    }, 2300);

    return () => clearTimeout(smallBannerTicker);
  }, [ticker2]);
  return (
    <div className="lg:h-[518px] h-[180px] md:overflow-hidden overflow-scroll lg:block grid md:grid-cols-3 grid-cols-1">
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
              ticker2 < -680 || ticker2 === 680 ? "opacity-0" : "opacity-100"
            }
          >
            <SmallBannerCards
              productinfo={product}
              bannercolors={smBannerCardColors[i]}
            />
          </div>
        );
      })}

      {window.innerWidth < 1024 ||
        clothingData?.products.slice(0, 5).map((product, i) => {
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
  );
};

export default SmallBannerSlider;
