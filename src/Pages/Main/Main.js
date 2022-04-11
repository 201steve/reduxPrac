import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./Product/ProductList";
import { PRODUCT_DATA } from "./Product/ProductData";

const Main = () => {
  const [shoes, setShoes] = useState(PRODUCT_DATA);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(2);

  const getData = () => {
    setLoad(true);
    axios
      .get(`https://codingapple1.github.io/shop/data${count}.json`)
      .then((res) => {
        console.log(res.data);
        setLoad(false);
        setShoes([...shoes, ...res.data]);
        setCount((count) => count + 1);
      })
      .catch(() => {
        setLoad(true);
        console.log("실패");
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          {shoes.map((shoes, index) => {
            return <ProductList key={index} shoes={shoes} index={index} />;
          })}
        </div>
        {load ? <div>로딩중</div> : null}
        <button onClick={getData} className="btn btn-primary">
          더보기
        </button>
      </div>
    </div>
  );
};

export default Main;
