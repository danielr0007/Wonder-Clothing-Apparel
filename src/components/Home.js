import { bannerContent } from "../constants";
import BigBannerCard from "./BigBannerCard";

const Home = () => {
  return (
    <div className="">
      <section className="h-[550px] bg-l-beige border-2">
        <div className="h-full max-w-[1350px] mx-auto flex border-2">
          <div className="h-full w-4/6 border-2">
            <BigBannerCard bannerinfo={bannerContent} />
          </div>
          <div className="h-full w-2/6 border-2 border-red"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
