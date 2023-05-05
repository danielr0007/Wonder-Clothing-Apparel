import { Link } from "react-router-dom";

const BigBannerCard = ({ bannerinfo }) => {
  return (
    <div
      className={`h-full w-full relative md:rounded-3xl rounded-2xl ${bannerinfo.background}`}
    >
      <div className="md:pt-40 pt-16 px-3 md:pl-8 md:text-left text-center">
        <h1 className="md:pb-5 pb-3 lg:text-6xl md:text-5xl text-3xl font-semibold text-white">
          {bannerinfo.headline}
        </h1>
        <h5 className="md:w-3/6 lg:text-lg md:text-base text-sm md:mb-12 mb-7 dark:text-l-grey">
          {bannerinfo.subheadline}
        </h5>
        <Link
          to="collections"
          className="md:py-4 md:px-12 py-2 px-8 bg-red rounded-lg text-white"
        >
          Shop Now
        </Link>
      </div>

      <img className={bannerinfo.positioningandscale} src={bannerinfo.image} />
    </div>
  );
};

export default BigBannerCard;
