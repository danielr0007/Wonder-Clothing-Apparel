import { useEffect, useState } from "react";
import { productDataApi, smBannerPics, smBannerCardColors } from "../constants";
import SmallBannerCards from "./SmallBannerCards";

const SmallBannerSlider = function () {
  const [ticker, setTicker] = useState(0);
  const [ticker2, setTicker2] = useState(0);
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

  const smallBannerCardsMov = useEffect(() => {
    if (window.innerWidth < 1024) return;

    const smallBannerTicker = setTimeout(() => {
      ticker <= -850 ? setTicker(680) : setTicker(ticker - 170);
      ticker2 <= -1700 ? setTicker2(-170) : setTicker2(ticker2 - 170);
    }, 2300);

    return () => clearTimeout(smallBannerTicker);
  }, [ticker]);

  return (
    <div className="lg:h-[518px] h-[180px] md:overflow-hidden overflow-scroll lg:block grid md:grid-cols-3 grid-cols-1">
      {clothingData?.products.slice(0, 5).map((product, i) => {
        return (
          <div
            key={product?.id}
            style={{
              transform: `translate(0,${ticker}px)`,
              transition: "ease-in",
              transitionDuration: "300ms",
            }}
            className={
              ticker < -680 || ticker === 680 ? "opacity-0" : "opacity-100"
            }
          >
            <SmallBannerCards
              productinfo={product}
              bannercolors={smBannerCardColors[i]}
              bannerpics={smBannerPics[i]}
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
                transform: `translate(0,${ticker2}px)`,
                transition: "ease-in",
                transitionDuration: "300ms",
              }}
              className={
                ticker2 < -1530 || ticker2 === -170
                  ? "opacity-0"
                  : "opacity-100"
              }
            >
              <SmallBannerCards
                productinfo={product}
                bannercolors={smBannerCardColors[i]}
                bannerpics={smBannerPics[i]}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SmallBannerSlider;
