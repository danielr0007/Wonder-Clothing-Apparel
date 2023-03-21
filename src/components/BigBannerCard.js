import { Link } from "react-router-dom";
import { bannerContent } from "../constants";

const BigBannerCard = ({ bannerinfo }) => {
  console.log(bannerinfo[0].image);
  return (
    <div className={`border-2  h-full w-full ${bannerinfo[0].background}`}>
      <div>
        <h1>{bannerinfo[0].headline}</h1>
        <h5>{bannerinfo[0].subheadline}</h5>
        <img src={require(bannerinfo[0].image)} />
        <Link>Shop Now</Link>
      </div>

      <div></div>
    </div>
  );
};

export default BigBannerCard;
