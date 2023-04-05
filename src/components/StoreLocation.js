import { useSelector } from "react-redux";

const StoreLocation = () => {
  const themeMode = useSelector((state) => state.themeMode.value);

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <section
        className={`pt-6 h-[850px]  lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="md:mb-8 max-w-[1250px] mx-auto grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <div className="p-5 bg-white rounded-xl">
              <h4 className="text-xl font-semibold pl-7 pb-1 pt-2">
                Shop Location
              </h4>
              <div className="flex py-4 pt-6">
                <div className="pr-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/fihkmkwt.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px", display: "block" }}
                  ></lord-icon>
                </div>
                <div className="">
                  <p className="text-sm leading-5">Maxima Tower</p>
                  <p className="text-sm">Mall of America, Miami, FL</p>
                </div>
              </div>
              <div className="flex py-5">
                <div className="pr-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/fihkmkwt.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px", display: "block" }}
                  ></lord-icon>
                </div>
                <div className="">
                  <p className="text-sm leading-5">Bashundhara City</p>
                  <p className="text-sm">Panthapath, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex py-5">
                <div className="pr-2">
                  <lord-icon
                    src="https://cdn.lordicon.com/fihkmkwt.json"
                    trigger="hover"
                    style={{ width: "30px", height: "30px", display: "block" }}
                  ></lord-icon>
                </div>
                <div className="">
                  <p className="text-sm leading-5">SK Tower Shopping Complex</p>
                  <p className="text-sm">Dhanmondi, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 col-span-8 h-[1000px]"></div>
        </div>
      </section>
    </div>
  );
};

export default StoreLocation;
