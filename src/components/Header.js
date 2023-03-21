import logo from "../assets/logo.png";
import { FaOpencart, FaRegHeart, FaMoon } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";
import { BsChatDots, BsSearch, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../utils/themeMode";
import { useEffect } from "react";

const Header = () => {
  const themeMode = useSelector((state) => state.themeMode.value);

  const dispatch = useDispatch();

  function getData() {
    // fetch("https://api.storerestapi.com/products")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <header className={!themeMode ? "bg-white px-5" : "bg-d-grey px-5  dark"}>
      <div className="max-w-[82rem] mx-auto">
        <nav className="py-2 flex justify-between">
          <Link to="/">
            <img src={logo} className="w-[220px]" />
          </Link>

          <div className="">
            <ul className="h-full flex gap-9 items-center">
              <li className="flex items-center gap-2 dark:text-l-grey">
                <FaOpencart /> <Link to="collections">Collections</Link>
              </li>
              <li className="flex items-center gap-2 dark:text-l-grey">
                <MdStorefront />
                <Link to="location">Store Location</Link>
              </li>
              <li className="flex items-center gap-2 dark:text-l-grey">
                <BsChatDots />
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="h-full flex gap-9 items-center ">
              <li className="flex items-center gap-2 dark:text-l-grey">
                <BsSearch />
                Search
              </li>
              <li className="flex items-center gap-2 dark:text-l-grey">
                <FaRegHeart />
                <Link to="wishlist">Wish List</Link>
              </li>
              <li>
                <Link
                  className="py-2 px-4 bg-red text-white rounded-md"
                  to="sign-in"
                >
                  Sign In
                </Link>
              </li>
              <li onClick={() => dispatch(toggle())}>
                {!themeMode ? (
                  <BsFillSunFill className="text-2xl dark:text-l-grey" />
                ) : (
                  <FaMoon className="text-2xl dark:text-l-grey" />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
