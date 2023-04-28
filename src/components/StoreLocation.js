import { useSelector } from "react-redux";
import CustomLocationComponent from "./CustomLocationComponent";
import { locationsData, productDataApi } from "../constants";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import SearchPage from "./SearchPage";
import CartSideBar from "./CartSideBar";

const StoreLocation = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const showSearch = useSelector((state) => state.search.value);
  const [clothingData, setClothingData] = useState(null);

  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data;

      setClothingData(product);
    }
    getProductData();
  }, []);

  const [locationShown, setLocationShown] = useState({
    broward: true,
    sawgrass: false,
    galleria: false,
  });

  function showBroward() {
    if (locationShown.broward === false) {
      setLocationShown({
        broward: true,
        sawgrass: false,
        galleria: false,
      });
    } else {
      setLocationShown({ ...locationShown });
    }
  }
  function showSawgrass() {
    if (locationShown.sawgrass === false) {
      setLocationShown({
        broward: false,
        sawgrass: true,
        galleria: false,
      });
    } else {
      setLocationShown({ ...locationShown });
    }
  }
  function showGalleria() {
    if (locationShown.galleria === false) {
      setLocationShown({
        broward: false,
        sawgrass: false,
        galleria: true,
      });
    } else {
      setLocationShown({ ...locationShown });
    }
  }

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section className={`pt-6 lg:px-7 md:px-10 px-3 bg-l-beige dark:bg-grey`}>
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-10">
          {/* Location List Section */}

          <div className="col-span-4 lg:pb-0 pb-9 ">
            <div className="p-5 bg-white rounded-xl lg:shadow-none shadow-lg dark:bg-l-grey">
              <h4 className="text-xl font-semibold pl-7 pb-1 pt-2">
                Shop Location
              </h4>

              <LocationSideCard
                showing={locationShown.broward}
                onclick={showBroward}
                name={locationsData[0].name}
                city={locationsData[0].city}
              />
              <LocationSideCard
                showing={locationShown.sawgrass}
                onclick={showSawgrass}
                name={locationsData[1].name}
                city={locationsData[1].city}
              />
              <LocationSideCard
                showing={locationShown.galleria}
                onclick={showGalleria}
                name={locationsData[2].name}
                city={locationsData[2].city}
              />
            </div>
          </div>

          <div className="col-span-8">
            {locationShown.broward && (
              <CustomLocationComponent locationdata={locationsData[0]} />
            )}
            {locationShown.sawgrass && (
              <CustomLocationComponent locationdata={locationsData[1]} />
            )}
            {locationShown.galleria && (
              <CustomLocationComponent locationdata={locationsData[2]} />
            )}
          </div>
        </div>
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
};

const LocationSideCard = ({ name, city, onclick, showing }) => {
  return (
    <div
      className={`flex py-4 pt-6 cursor-pointer ${
        showing ? "text-l-green dark:text-navy" : "text-black dark:text-white"
      }`}
      onClick={() => onclick()}
    >
      <div className="pr-2">
        <lord-icon
          src="https://cdn.lordicon.com/fihkmkwt.json"
          trigger="hover"
          style={{ width: "30px", height: "30px", display: "block" }}
        ></lord-icon>
      </div>
      <div className="">
        <p className="text-sm font-semibold leading-5">{name}</p>
        <p className="text-sm">{city}</p>
      </div>
    </div>
  );
};

export default StoreLocation;
