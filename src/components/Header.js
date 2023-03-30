import logo from "../assets/logo.png";
import { FaOpencart, FaRegHeart, FaMoon } from "react-icons/fa";
import { MdStorefront, MdMenu } from "react-icons/md";
import { BsChatDots, BsSearch, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../utils/themeMode";
import { useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const themeMode = useSelector((state) => state.themeMode.value);

  const dispatch = useDispatch();

  const mobileMenuLinks = [
    {
      name: "collections",
      icon: "FaOpencart",
    },
    {
      name: "store location",
      icon: "MdStorefront",
    },
    {
      name: "contact",
      icon: "FaOpencart",
    },
  ];

  return (
    <header
      className={
        !themeMode ? "bg-white px-5 relative" : "bg-d-grey px-5 dark relative"
      }
    >
      <div className="max-w-[82rem] mx-auto">
        <nav className="py-2 lg:px-0 px-3 flex justify-between">
          <MdMenu className="self-center text-2xl lg:hidden" />
          <Link to="/">
            <img src={logo} className="lg:w-[220px] md:w-[200px] w-[170px]" />
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
      <MobileMenu links={mobileMenuLinks} />
    </header>
  );
};

export default Header;
