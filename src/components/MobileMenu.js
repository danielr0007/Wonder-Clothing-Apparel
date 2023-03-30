import { FaOpencart, FaRegHeart, FaMoon } from "react-icons/fa";
import { MdStorefront, MdMenu } from "react-icons/md";
import { BsChatDots, BsSearch, BsFillSunFill } from "react-icons/bs";

const MobileMenu = function (mobileMenuLinks) {
  return (
    <div className="w-52 mt-1 bg-white absolute left-3 top-[100%] rounded-2xl z-50">
      <ul>
        <MenuLink mobileMenuLinks={mobileMenuLinks.links} />
      </ul>
    </div>
  );
};

const MenuLink = function ({ mobileMenuLinks }) {
  return (
    <>
      {mobileMenuLinks.map((link, i) => {
        return (
          <li key={i} className="py-2 px-4 text-sm">
            <span></span> {link.name}
          </li>
        );
      })}
    </>
  );
};

export default MobileMenu;
