import { FaOpencart, FaRegHeart, FaMoon } from "react-icons/fa";

const MobileMenu = function (props) {
  return (
    <div
      className={`w-52 mt-1 bg-white dark:bg-l-grey absolute left-3 top-[100%] rounded-2xl z-50 ${
        props.mobileMenuVisibility || "hidden"
      } `}
    >
      <ul>
        <MenuLink mobileMenuLinks={props} />
      </ul>
    </div>
  );
};

const MenuLink = function (props) {
  return (
    <>
      {props.mobileMenuLinks.links.map((link, i) => {
        return (
          <li
            key={i}
            className="py-2 px-4 text-sm flex items-center gap-3 rounded-2xl dark:text-navy hover:bg-l-beige"
          >
            <span>{props.mobileMenuLinks.children[i]}</span> {link.name}
          </li>
        );
      })}
    </>
  );
};

export default MobileMenu;
