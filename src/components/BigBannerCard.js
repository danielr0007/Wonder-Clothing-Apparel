import { Link } from "react-router-dom";

const BigBannerCard = ({ bannerinfo }) => {
  return (
    <div
      className={`h-full w-full relative rounded-3xl ${bannerinfo.background}`}
    >
      <div className="pt-40 pl-8 ">
        <h1 className="pb-5 text-6xl font-semibold text-white">
          {bannerinfo.headline}
        </h1>
        <h5 className="w-3/6 text-lg mb-12">{bannerinfo.subheadline}</h5>
        <Link className="py-4 px-12 bg-red rounded-lg text-white">
          Shop Now
        </Link>
      </div>

      <img className={bannerinfo.positioningandscale} src={bannerinfo.image} />
    </div>
  );
};

export default BigBannerCard;
