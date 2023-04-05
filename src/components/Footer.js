import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import {
  FaLongArrowAltRight,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = function () {
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <footer
      className={
        themeMode
          ? "pt-6 sm:px-7 px-3 bg-grey dark"
          : "pt-6 sm:px-7 px-3 bg-l-beige dark:bg-grey"
      }
    >
      <div className="mx-auto lg:p-12 md:p-8 h-full xl:max-w-[1325px]">
        <div className="md:p-0 p-3">
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-7 pb-6 border-b-2 border-l-grey">
            <div>
              <img className="md:w-[200px] w-[150px]" src={logo} alt="" />
            </div>
            <div>
              <ul>
                <li className="pb-2 font-bold dark:text-l-grey">
                  <Link>ManuBar</Link>
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  <Link to="collections">Products</Link>
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  <Link to="location">Store Location</Link>
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  <Link to="contact">Contact</Link>
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  <Link to="sign-in">Login</Link>
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  <Link>Register</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-2 font-bold dark:text-l-grey">
                  Useful Links
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  Privacy Policy
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">Jobs</li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  Terms & Conditions
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="pb-2 font-bold dark:text-l-grey">
                  Reach out to us
                </li>
                <li className="text-sm pb-1 dark:text-l-grey">
                  Closet@closet.com
                </li>
                <li className="text-sm pb-1 dark:text-l-grey"> 954-692-6633</li>
              </ul>
            </div>
          </div>

          <div className="pt-5 flex md:gap-0 gap-4 justify-between">
            <p className="md:text-sm text-xs dark:text-l-grey">
              All rights reserved to Fashionista © 2023
            </p>
            <div className="flex gap-4">
              <Link>
                <FaInstagram className="text-xl dark:text-l-grey" />
              </Link>
              <Link>
                <FaFacebook className="text-xl dark:text-l-grey" />
              </Link>
              <Link>
                <FaTwitter className="text-xl dark:text-l-grey" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
