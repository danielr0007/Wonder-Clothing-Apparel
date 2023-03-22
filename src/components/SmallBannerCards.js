const SmallBannerCards = () => {
  return (
    <div className="px-5 py-4 mt-2 mb-5 bg-l-blue flex justify-between items-center rounded-lg ">
      <div>
        <h4 className=" text-xl font-semibold">Red Salower for Girl</h4>
        <p className=" text-xs pb-2">Size: XL L M</p>
        <p className=" text-2xl font-light">$300</p>
      </div>

      <img
        className="w-20"
        src="https://drive.google.com/uc?export=view&id=1KE96uWE2LWAlKob1gmzEvIITnmBR8Cyd"
      />
    </div>
  );
};

export default SmallBannerCards;
