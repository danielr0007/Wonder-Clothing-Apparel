const Coupon = () => {
  return (
    <div className="md:h-96 h-[550px] bg-navy rounded-2xl md:grid grid-cols-10">
      <div className="col-span-4 md:pb-0 pb-5 flex justify-center items-center">
        <lord-icon
          src="https://cdn.lordicon.com/pimvysaa.json"
          trigger="hover"
          style={{ width: "250px", height: "250px", display: "block" }}
        ></lord-icon>
      </div>

      <div className="col-span-6 flex flex-col justify-center md:items-start items-center">
        <h2 className="md:pb-4 pb-6 lg:text-5xl md:text-4xl text-3xl md:text-left text-center font-bold text-white">
          Get <span className="text-yellow">20%</span> Off Discount Coupon
        </h2>
        <h5 className="lg:text-2xl md:text-xl text-base text-white md:pb-10 pb-11">
          by subscribing to our Newsletter
        </h5>
        <div>
          <input
            className="md:py-3 md:px-8 py-2 px-2 rounded-l-xl"
            type="text"
          />
          <button className="md:py-3 md:px-4 py-2 px-2 bg-red rounded-r-xl text-white">
            Get Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
