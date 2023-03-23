const SmallBannerCards = ({ productinfo, bannercolors }) => {
  console.log(bannercolors);
  return (
    <div
      className={`h-[150px] px-5 mt-5 mb-5 ${bannercolors} opacity-80 flex justify-between items-center rounded-lg`}
    >
      <div>
        <h4 className=" text-xl font-semibold">{productinfo.title}</h4>
        <p className=" text-xs pb-2">Size: XL L M</p>
        <p className=" text-2xl font-light">${productinfo.price}</p>
      </div>

      <img className="w-20" src={productinfo.images[2]} />
    </div>
  );
};

export default SmallBannerCards;
