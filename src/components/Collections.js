import { useSelector } from "react-redux";

const Collections = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <section className={`pt-6 lg:px-7 md:px-10 px-3 bg-l-beige dark:bg-grey`}>
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-10">
          {/* Location List Section */}

          <div className="col-span-3 lg:pb-0 pb-9 ">
            <div className="p-2 bg-white rounded-xl shadow-lg dark:bg-l-grey">
              <ul>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  All Products
                </li>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  Smartphones
                </li>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  Laptops
                </li>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  Fragances
                </li>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  Skincare
                </li>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  Groceries
                </li>
                <li className="p-4 text-center rounded-lg text-sm text-navy">
                  Home Decoration
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-9 h-[800px] border-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
