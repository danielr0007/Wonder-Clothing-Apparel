import { useSelector } from "react-redux";

const WishList = () => {
  const themeMode = useSelector((state) => state.themeMode.value);

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <section
        className={`pt-6 h-[850px]  lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="md:mb-8 max-w-[1150px] mx-auto">
          <h1 className="md:mt-16 mt-20 md:pb-32 pb-16 lg:text-5xl md:text-4xl text-3xl  dark:text-white font-bold text-center">
            My Wishlist
          </h1>

          <h2 className="md:mb-12 mb-16 md:text-3xl text-2xl text-center dark:text-white">
            You have no items in your Wishlist!
          </h2>

          <button className="block mx-auto py-3 px-9 bg-red rounded-lg text-white">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default WishList;
