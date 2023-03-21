import { useEffect, useState } from "react";
import { bannerContent } from "../constants";
import BigBannerCard from "./BigBannerCard";

const Home = () => {
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticker === 3) {
        setTicker(0);
      } else {
        setTicker(ticker + 1);
      }
    }, 4000);
  }, [ticker]);
  return (
    <div className="">
      <section className="pt-6 pb-7 px-7 h-[550px] bg-l-beige ">
        <div className="h-full max-w-[1325px] mx-auto flex gap-9">
          <div className="h-full w-4/6 ">
            {ticker === 0 && <BigBannerCard bannerinfo={bannerContent[0]} />}
            {ticker === 1 && <BigBannerCard bannerinfo={bannerContent[1]} />}
            {ticker === 2 && <BigBannerCard bannerinfo={bannerContent[2]} />}
            {ticker === 3 && <BigBannerCard bannerinfo={bannerContent[3]} />}
            {/* <BigBannerCard bannerinfo={bannerContent[0]} /> */}
            {/* <BigBannerCard bannerinfo={bannerContent[1]} /> */}
            {/* <BigBannerCard bannerinfo={bannerContent[2]} /> */}
            {/* <BigBannerCard bannerinfo={bannerContent[3]} /> */}
            {/* {bannerContent.map((banner) => {
              return <BigBannerCard key={banner.key} bannerinfo={banner} />;
            })} */}
          </div>
          <div className="h-full w-2/6 border-2 border-red"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
