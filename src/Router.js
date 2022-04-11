import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import WrongDirection from "./Components/Nav/WrongDirection";
import Cart from "./Pages/Cart/Cart";
import Detail from "./Pages/Detail/Detail";
import Main from "./Pages/Main/Main";
import { PRODUCT_DATA } from "./Pages/Main/Product/ProductData";

import { Provider } from "react-redux";
import { createStore } from "redux";

export const TestContext = React.createContext(null);

const reducer = (state = PRODUCT_DATA, action) => {
  if (action.type === "countIncrease") {
    let newProductData = [...state];
    newProductData[0].quantity++;
    return newProductData;
  } else if (action.type === "countDecrease") {
    let newProductData = [...state];
    newProductData[0].quantity > 0 && newProductData[0].quantity--;
    return newProductData;
  } else {
    return state;
  }
};

const store = createStore(reducer);

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:wrongDirection" element={<WrongDirection />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default Router;
