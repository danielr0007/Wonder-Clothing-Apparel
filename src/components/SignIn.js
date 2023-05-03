import CartSideBar from "./CartSideBar";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SignIn = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section
        className={`pt-6 pb-7 lg:px-7 md:px-5 px-3 bg-l-beige dark:bg-grey flex justify-center items-center`}
      >
        <div className="my-36 w-[670px] h-[440px] grid grid-cols-2 bg-white rounded-lg shadow-lg">
          <div>
            <h4>Login</h4>
            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
            </div>

            <button>Login</button>

            <div>
              <p>
                Don't have an account?
                <span>
                  <Link>Register Here</Link>
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className="bg-red w-full h-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
