import { useSelector } from "react-redux";
import { productDataApi, productPics } from "../constants";
import SmProductCard from "./SmProductCard";
import { useReducer, useState, useEffect } from "react";
import SearchPage from "./SearchPage";
import CartSideBar from "./CartSideBar";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

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
  const showSearch = useSelector((state) => state.search.value);
  const [clothingData, setClothingData] = useState(null);

  const [showingProducts, dispatch] = useReducer(reducer, {
    all: true,
    smartphones: false,
    laptops: false,
    fragances: false,
    skincare: false,
    groceries: false,
    homedecorations: false,
  });

  useEffect(() => {
    async function getProductData() {
      let response = await fetch(productDataApi);
      let data = await response.json();
      let product = data;

      setClothingData(product);
    }
    getProductData();
  }, []);
  return (
    <div className={`${themeMode ? "bg-grey dark" : "bg-l-beige"}`}>
      <CartIcon />
      <section
        className={`pt-6 pb-20 lg:px-7 md:px-10 px-3 bg-l-beige dark:bg-grey`}
      >
        <div className="max-w-[1250px] mx-auto lg:grid grid-cols-12 gap-8">
          {/* Location List Section */}

          <div className="col-span-3 lg:pb-0 pb-9">
            <div className="p-2 rounded-xl shadow-lg bg-white dark:bg-l-grey">
              <ul className="md:block flex items-center gap-2 md:overflow-hidden overflow-scroll">
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWAll" });
                  }}
                  className={
                    showingProducts.all
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
                >
                  All Products
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWSMARTPHONES" });
                  }}
                  className={
                    showingProducts.smartphones
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
                >
                  Smartphones
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWLAPTOPS" });
                  }}
                  className={
                    showingProducts.laptops
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
                >
                  Laptops
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWFRAGRANCES" });
                  }}
                  className={
                    showingProducts.fragances
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
                >
                  Fragances
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWSKINCARE" });
                  }}
                  className={
                    showingProducts.skincare
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
                >
                  Skincare
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWGROCERIES" });
                  }}
                  className={
                    showingProducts.groceries
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
                >
                  Groceries
                </li>
                <li
                  onClick={() => {
                    dispatch({ type: "SHOWHOMEDECORATION" });
                  }}
                  className={
                    showingProducts.homedecorations
                      ? "p-4 text-center rounded-lg bg-navy text-sm text-white cursor-pointer"
                      : "p-4 text-center rounded-lg text-sm text-navy cursor-pointer hover:bg-l-grey"
                  }
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
                  <Link to={"/product/" + product.id} key={product?.id}>
                    <SmProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[i]}
                    />
                  </Link>
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
                    <Link to={"/product/" + product.id} key={product?.id}>
                      <SmProductCard
                        key={product?.id}
                        productinfo={product}
                        productpics={productPics[i]}
                      />
                    </Link>
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
                    <Link to={"/product/" + product.id} key={product?.id}>
                      <SmProductCard
                        key={product?.id}
                        productinfo={product}
                        productpics={productPics[5 + i]}
                      />
                    </Link>
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
                    <Link to={"/product/" + product.id} key={product?.id}>
                      <SmProductCard
                        key={product?.id}
                        productinfo={product}
                        productpics={productPics[10 + i]}
                      />
                    </Link>
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
                    <Link to={"/product/" + product.id} key={product?.id}>
                      <SmProductCard
                        key={product?.id}
                        productinfo={product}
                        productpics={productPics[15 + i]}
                      />
                    </Link>
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
                    <Link to={"/product/" + product.id} key={product?.id}>
                      <SmProductCard
                        key={product?.id}
                        productinfo={product}
                        productpics={productPics[20 + i]}
                      />
                    </Link>
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
                    <Link to={"/product/" + product.id} key={product?.id}>
                      <SmProductCard
                        key={product?.id}
                        productinfo={product}
                        productpics={productPics[25 + i]}
                      />
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      </section>
      <SearchPage data={clothingData} show={showSearch} />
      <CartSideBar />
    </div>
  );
};

export default Collections;
