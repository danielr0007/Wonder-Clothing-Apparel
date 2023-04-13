import { useSelector } from "react-redux";

const ProductPage = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <section className={`pt-6 lg:px-7 md:px-10 px-3 bg-l-beige dark:bg-grey`}>
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-8">
          {/* Image//////////////////////////////////// */}
          <div className=" col-span-6">
            <div className="w-[510px] h-[530px] bg-red"></div>
          </div>

          <div className="col-span-6">
            <p className="mt-3 pb-1 text-sm text-red">Adidas</p>
            <h2 className="pb-8 text-3xl font-semibold">Ultraboost 22 shoes</h2>
            <h3 className="pb-9 text-4xl">$79.99</h3>

            {/* Sizing///////////////////////////////////// */}
            <div className="pb-8">
              <p className="pb-2 text-red font-semibold">Pick Size</p>
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-b-olive rounded-full flex items-center justify-center">
                  <p>M</p>
                </div>
                <div className="h-10 w-10 bg-b-olive rounded-full flex items-center justify-center">
                  <p>L</p>
                </div>
                <div className="h-10 w-10 bg-b-olive rounded-full flex items-center justify-center">
                  <p>XL</p>
                </div>
                <div className="h-10 w-10 bg-b-olive rounded-full flex items-center justify-center">
                  <p>2XL</p>
                </div>
              </div>
            </div>

            {/* Color picker////////////////////////////// */}
            <div className="pb-9">
              <p className="pb-2 text-red font-semibold">Color</p>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-b-olive rounded-full"></div>
                <div className="w-6 h-6 bg-red rounded-full"></div>
              </div>
            </div>

            {/* Quatity & Add to cart///////////////////// */}
            <div className="pb-12 flex gap-14">
              <div className="flex gap-3 items-center">
                <div className="w-9 h-12 bg-peach flex items-center justify-center">
                  -
                </div>
                <p>1</p>
                <div className="w-9 h-12 bg-peach flex items-center justify-center">
                  +
                </div>
              </div>
              {/* add to cart */}

              <div className="py-2 px-20 flex items-center justify-center gap-2 bg-grey rounded-lg">
                <p className="text-white">Icon</p>
                <p className="text-white text-sm">Go to Cart</p>
              </div>
            </div>

            {/* Decrip/Review/Specifics//////////////////////////// */}
            <div className="pb-5 flex">
              <div className="px-6 py-1 border-b-2">
                <p className="text-sm">Description</p>
              </div>
              <div className="px-6 py-1 border-b-2">
                <p className="text-sm">Specification</p>
              </div>
              <div className="px-6 py-1 border-b-2">
                <p className="text-sm">Review</p>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eaque asperiores praesentium vero eos suscipit
              inventore ex culpa corrupti beatae animi itaque nisi labore
              cupiditate veritatis in doloremque consectetur mollitia?
              Necessitatibus laboriosam animi itaque recusandae asperiores vel,
              optio fugiat provident dolorem, voluptatum, velit nostrum officiis
              cupiditate hic iste mollitia inventore cum voluptate. Rem itaque
              sint quasi dolorum consequuntur, vero quam molestias consectetur
              delectus aut aliquid non at nostrum voluptas magnam ipsa eligendi
              libero qui? Unde, laborum quo. Fugit, deleniti unde?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
