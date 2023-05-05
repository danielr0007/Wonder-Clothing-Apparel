import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";
import StoreLocation from "./components/StoreLocation";
import Contact from "./components/Contact";
import WishList from "./components/WishList";
import SignIn from "./components/SignIn";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/location",
        element: <StoreLocation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product/:Id",
        element: <ProductPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
