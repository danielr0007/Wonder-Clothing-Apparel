import { useEffect, useRef, useState } from "react";
import { bannerContent } from "../constants";
import BigBannerCard from "./BigBannerCard";
import SmallBannerCards from "./SmallBannerCards";

const Home = () => {
  const [ticker, setTicker] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [ticker2, setTicker2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      ticker === 3 ? setTicker(0) : setTicker(ticker + 1);
    }, 5000);

    setOverlay(true);

    setTimeout(() => {
      setOverlay(false);
    }, 4850);
  }, [ticker]);

  useEffect(() => {
    setTimeout(() => {
      ticker2 >= 775 ? setTicker2(0) : setTicker2(ticker2 + 170);
    }, 2000);

    console.log(ticker2.toString());
  }, [ticker2]);

  return (
    <div className="">
      <section className="pt-6 pb-7 px-7 h-[593px] bg-l-beige border-2">
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
                    className={`w-4 h-4  rounded-full ${
                      ticker === i ? "bg-red" : "bg-white"
                    }`}
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
                New Arrival
              </p>
            </div>

            <div className="h-[518px] overflow-hidden">
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                  color: "red",
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                  color: "green",
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                  color: "red",
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                }}
              >
                <SmallBannerCards />
              </div>
              <div
                style={{
                  transform: `translate(0,-${ticker2}px)`,
                }}
              >
                <SmallBannerCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
