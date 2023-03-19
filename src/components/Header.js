import logo from "../assets/logo.png";
import { FaOpencart, FaRegHeart, FaMoon } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";
import { BsChatDots, BsSearch, BsFillSunFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[82rem] mx-auto border-2 ">
        <nav className="py-1 flex justify-between">
          <img src={logo} className="w-[220px]" />

          <div className="">
            <ul className="h-full flex gap-9 items-center">
              <li className="flex items-center gap-2 ">
                <FaOpencart /> Collections
              </li>
              <li className="flex items-center gap-2 ">
                <MdStorefront />
                Store Location
              </li>
              <li className="flex items-center gap-2 ">
                <BsChatDots />
                Contact
              </li>
            </ul>
          </div>

          <div>
            <ul className="h-full flex gap-9 items-center">
              <li className="flex items-center gap-2 ">
                <BsSearch />
                Search
              </li>
              <li className="flex items-center gap-2 ">
                <FaRegHeart />
                WishList
              </li>
              <li>Sign In</li>
              <li>
                <FaMoon />
                <BsFillSunFill />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
