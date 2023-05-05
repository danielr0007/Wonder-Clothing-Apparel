import CartSideBar from "./CartSideBar";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { productDataApi } from "../constants";
import singUpImage from "../assets/login-image.png";
import loginImage from "../assets/signup-image.png";
import SearchPage from "./SearchPage";
const SignIn = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const showSearch = useSelector((state) => state.search.value);
  const [clothingData, setClothingData] = useState(null);
  const [registerToLoginState, setRegisterToLoginState] = useState(false);

  function registerToLoginToggle() {
    !registerToLoginState
      ? setRegisterToLoginState(true)
      : setRegisterToLoginState(false);
  }

  // ! Fetches data from API and sets it in clothingData state variable
  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data;

      setClothingData(product);
    }
    getProductData();
  }, []);
  console.log(clothingData);

  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section
        className={`pt-6 pb-7 lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey flex justify-center items-center`}
      >
        {/* Whole square container */}
        {registerToLoginState || (
          <div className="md:my-36 my-20 w-[670px] h-[400px] md:grid grid-cols-2 bg-white dark:bg-l-grey rounded-lg shadow-lg">
            {/* Left side with form */}
            <div className="md:p-7 p-10">
              <h4 className="mb-6 text-center text-navy text-xl font-semibold">
                Login
              </h4>
              <div className="">
                <input
                  className="border-2 mb-2 w-full px-2 py-2 rounded-lg border-l-grey"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="border-2 mb-2 w-full px-2 py-2 rounded-lg border-l-grey"
                  type="text"
                  placeholder="Password"
                />
              </div>

              <button className="mt-5 mb-2 w-full px-2 py-3 rounded-lg bg-b-olive dark:bg-navy dark:text-white text-sm">
                Login
              </button>

              <div className="mt-12 text-sm text-center">
                <p>
                  Don't have an account?
                  <span
                    onClick={registerToLoginToggle}
                    className="text-blue dark:text-red cursor-pointer"
                  >
                    <p className="inline"> Register Here</p>
                  </span>
                </p>
              </div>
            </div>

            {/* Right side with image */}
            <div className="hidden rounded-r-lg bg-water dark:bg-d-purple w-full h-full md:flex justify-center items-center">
              <img className="w-5/6" src={loginImage} alt="" />
            </div>
          </div>
        )}
        {registerToLoginState && (
          <RegisterBox registerToLoginToggle={registerToLoginToggle} />
        )}
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
};

export default SignIn;

// todo Register Box

const RegisterBox = function (props) {
  return (
    <div className="my-36 w-[670px] h-[400px] md:grid grid-cols-2 bg-white rounded-lg shadow-lg">
      {/* Right side with image */}
      <div className="hidden bg-l-green dark:bg-d-green rounded-l-lg md:flex justify-center items-center">
        <img className="w-5/6" src={singUpImage} alt="" />
      </div>

      {/* Left side with form */}
      <div className="md:p-7 p-10 dark:bg-l-grey rounded-r-lg">
        <h4 className="mb-6 text-center text-navy text-xl font-semibold">
          Open New Account
        </h4>
        <div className="">
          <input
            className="border-2 mb-2 w-full px-2 py-2 rounded-lg border-l-grey"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="border-2 mb-2 w-full px-2 py-2 rounded-lg border-l-grey"
            type="text"
            placeholder="Email"
          />
          <input
            className="border-2 mb-2 w-full px-2 py-2 rounded-lg border-l-grey"
            type="text"
            placeholder="Password"
          />
        </div>

        <button className="mt-5 mb-2 w-full px-2 py-3 rounded-lg bg-b-olive dark:bg-navy dark:text-white text-sm">
          Register
        </button>

        <div className="mt-8 text-sm text-center">
          <p>
            Already have an account?
            <span
              onClick={props.registerToLoginToggle}
              className="text-blue dark:text-red cursor-pointer"
            >
              <p className="inline"> Login Here</p>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
