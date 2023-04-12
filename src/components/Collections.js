import { useSelector } from "react-redux";
import { productDataApi, productPics } from "../constants";
import SmProductCard from "./SmProductCard";
import useFetchHook from "../utils/useFetchHook";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOWAll":
      return {
        all: true,
        smartphones: false,
        laptops: false,
        fragances: false,
        skincare: false,
        groceries: false,
        homedecorations: false,
      };
    case "SHOWSMARTPHONES":
      return {
        all: false,
        smartphones: true,
        laptops: false,
        fragances: false,
        skincare: false,
        groceries: false,
        homedecorations: false,
      };
    case "SHOWLAPTOPS":
      return {
        all: false,
        smartphones: false,
        laptops: true,
        fragances: false,
        skincare: false,
        groceries: false,
        homedecorations: false,
      };
    case "SHOWFRAGRANCES":
      return {
        all: false,
        smartphones: false,
        laptops: false,
        fragances: true,
        skincare: false,
        groceries: false,
        homedecorations: false,
      };
    case "SHOWSKINCARE":
      return {
        all: false,
        smartphones: false,
        laptops: false,
        fragances: false,
        skincare: true,
        groceries: false,
        homedecorations: false,
      };
    case "SHOWGROCERIES":
      return {
        all: false,
        smartphones: false,
        laptops: false,
        fragances: false,
        skincare: false,
        groceries: true,
        homedecorations: false,
      };
    case "SHOWHOMEDECORATION":
      return {
        all: false,
        smartphones: false,
        laptops: false,
        fragances: false,
        skincare: false,
        groceries: false,
        homedecorations: true,
      };
  }
};

const Collections = () => {
  const themeMode = useSelector((state) => state.themeMode.value);

  const [showingProducts, dispatch] = useReducer(reducer, {
    all: true,
    smartphones: false,
    laptops: false,
    fragances: false,
    skincare: false,
    groceries: false,
    homedecorations: false,
  });

  const clothingData = useFetchHook(productDataApi);
  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <section className={`pt-6 lg:px-7 md:px-10 px-3 bg-l-beige dark:bg-grey`}>
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-8">
          {/* Location List Section */}

          <div className="col-span-3 lg:pb-0 pb-9 ">
            <div className="p-2 bg-white rounded-xl shadow-lg dark:bg-l-grey">
              <ul>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWAll" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  All Products
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWSMARTPHONES" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  Smartphones
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWLAPTOPS" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  Laptops
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWFRAGRANCES" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  Fragances
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWSKINCARE" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  Skincare
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWGROCERIES" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  Groceries
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWHOMEDECORATION" });
                  }}
                  className="p-4 text-center rounded-lg text-sm text-navy"
                >
                  Home Decoration
                </li>
              </ul>
            </div>
          </div>

          {showingProducts.all && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5">
              {clothingData?.products.slice(0, 30).map((product, i) => {
                return (
                  <SmProductCard
                    key={product?.id}
                    productinfo={product}
                    productpics={productPics[i]}
                  />
                );
              })}
            </div>
          )}

          {showingProducts.smartphones && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5 ">
              {clothingData?.products
                .filter((product) =>
                  Object.values(product).includes("smartphones")
                )
                .map((product, i) => {
                  return (
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[i]}
                    />
                  );
                })}
            </div>
          )}

          {showingProducts.laptops && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5 ">
              {clothingData?.products
                .filter((product) => Object.values(product).includes("laptops"))
                .map((product, i) => {
                  return (
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[5 + i]}
                    />
                  );
                })}
            </div>
          )}

          {showingProducts.fragances && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5 ">
              {clothingData?.products
                .filter((product) =>
                  Object.values(product).includes("fragrances")
                )
                .map((product, i) => {
                  return (
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[10 + i]}
                    />
                  );
                })}
            </div>
          )}

          {showingProducts.skincare && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5 ">
              {clothingData?.products
                .filter((product) =>
                  Object.values(product).includes("skincare")
                )
                .map((product, i) => {
                  return (
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[15 + i]}
                    />
                  );
                })}
            </div>
          )}

          {showingProducts.groceries && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5 ">
              {clothingData?.products
                .filter((product) =>
                  Object.values(product).includes("groceries")
                )
                .map((product, i) => {
                  return (
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[20 + i]}
                    />
                  );
                })}
            </div>
          )}

          {showingProducts.homedecorations && (
            <div className="col-span-9 grid lg:grid-cols-3 grid-cols-2 gap-5">
              {clothingData?.products
                .filter((product) =>
                  Object.values(product).includes("home-decoration")
                )
                .map((product, i) => {
                  return (
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[25 + i]}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collections;
