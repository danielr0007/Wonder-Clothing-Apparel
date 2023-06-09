import { useEffect, useState } from "react";
import { productDataApi, productPics } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchProductCard from "./SearchProductCard";
import { show, remove } from "../utils/search";

const SearchPage = (props) => {
  const productData = props?.data?.products;
  const [dataAvailable, setDataAvailable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  function validateInput(input) {
    // Check if input is not empty and contains non-whitespace characters
    if (/\S/.test(input)) {
      return false; // input is valid
    } else {
      return true; // input is invalid
    }
  }

  useEffect(() => {
    if (productData === undefined) {
      setDataAvailable(false);
    } else {
      setDataAvailable(true);
    }
  }, [productData]);

  return (
    <section
      className={`${
        props.show ? "block" : "hidden"
      } h-full p-4 w-full bg-t-black fixed top-0 bottom-0 right-0 left-0 z-50 overflow-scroll`}
    >
      <div className="md:pt-8 pt-28 max-w-[1200px] mx-auto">
        {/* TITLE/////// */}
        <h1 className="pb-9 mx-auto text-center text-white lg:text-5xl md:text-4xl text-2xl font-semibold">
          Search Products
        </h1>
        {/* INPUT////// */}
        <input
          className="lg:w-2/6 md:w-3/6 w-5/6 pl-3 py-3 mb-14 rounded-lg mx-auto block text-xl"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
          {Boolean(productData) === false || validateInput(searchQuery) ? (
            <h4 className="md:text-3xl text-2xl text-white">No Items Found!</h4>
          ) : (
            productData
              .filter(
                (product) =>
                  product.title.toLowerCase().includes(searchQuery) ||
                  product.category.toLowerCase().includes(searchQuery)
              )
              .map((product) => {
                return (
                  <Link to={"/product/" + product.id} key={product?.id}>
                    <SearchProductCard
                      key={product?.id}
                      productinfo={product}
                      productpics={productPics[product?.id - 1]}
                    />
                  </Link>
                );
              })
          )}
        </div>
      </div>
      <div
        onClick={() => dispatch(remove())}
        className="w-8 h-8 bg-l-beige rounded-full flex justify-center items-center absolute right-8 top-12 cursor-pointer"
      >
        x
      </div>
    </section>
  );
};

export default SearchPage;
