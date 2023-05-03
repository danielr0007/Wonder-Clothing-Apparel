import logo from "../assets/logo.png";
import { FaOpencart, FaRegHeart, FaMoon } from "react-icons/fa";
import { MdStorefront, MdMenu, MdLogin } from "react-icons/md";
import { BsChatDots, BsSearch, BsFillSunFill, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../utils/themeMode";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { show } from "../utils/search";
import { toggleSideCart } from "../utils/sideCartVisible";

const Header = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const dispatch = useDispatch();

  const mobileMenuLinks = [
    {
      name: "Collections",
      path: "collections",
    },
    {
      name: "Store Location",
      path: "location",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];

  function toggleMobileMenu() {
    !showMobileMenu ? setShowMobileMenu(true) : setShowMobileMenu(false);
  }

  return (
    <header
      className={
        !themeMode ? "bg-white px-5 relative" : "bg-d-grey px-5 dark relative"
      }
    >
      <div className="max-w-[82rem] mx-auto">
        <nav className="md:py-2 py-4 lg:px-0 px-1 flex justify-between">
          <MdMenu
            onClick={toggleMobileMenu}
            className="self-center text-xl lg:hidden dark:text-l-grey cursor-pointer"
          />
          <Link to="/">
            <img src={logo} className="lg:w-[220px] md:w-[200px] w-[120px]" />
          </Link>

          <div className="">
            <ul className="h-full flex gap-9 items-center">
              <li className="lg:flex items-center gap-2 dark:text-l-grey hidden">
                <FaOpencart /> <Link to="collections">Collections</Link>
              </li>
              <li className="lg:flex items-center gap-2 dark:text-l-grey hidden">
                <MdStorefront />
                <Link to="location">Store Location</Link>
              </li>
              <li className="lg:flex items-center gap-2 dark:text-l-grey hidden">
                <BsChatDots />
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="h-full flex md:gap-9 gap-4 items-center ">
              <li
                onClick={() => dispatch(show())}
                className="flex items-center gap-2 dark:text-l-grey cursor-pointer"
              >
                <BsSearch />
                <p className="md:block hidden">Search</p>
              </li>
              <li className="dark:text-l-grey">
                <Link className="flex items-center gap-2" to="wishlist">
                  <FaRegHeart />
                  <p className="md:block hidden">Wish List</p>
                </Link>
              </li>
              <li className="md:hidden block">
                <BsCart
                  onClick={() => dispatch(toggleSideCart())}
                  className="dark:text-l-grey cursor-pointer"
                />
              </li>
              <li>
                <Link
                  className="py-2 px-4 bg-red text-white rounded-md sm:block hidden"
                  to="sign-in"
                >
                  Sign In
                </Link>
                <Link className="sm:hidden block" to="sign-in">
                  <MdLogin className=" dark:text-l-grey" />
                </Link>
              </li>

              <li onClick={() => dispatch(toggle())}>
                {!themeMode ? (
                  <BsFillSunFill className="text-xl dark:text-l-grey" />
                ) : (
                  <FaMoon className="text-xl dark:text-l-grey" />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <MobileMenu links={mobileMenuLinks} mobileMenuVisibility={showMobileMenu}>
        <FaOpencart />
        <MdStorefront />
        <BsChatDots />
      </MobileMenu>
    </header>
  );
};

export default Header;
