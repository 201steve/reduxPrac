import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TestContext } from "../../../Router";

const ProductList = ({ shoes }) => {
  const { id, title, content, price } = shoes;
  const navigate = useNavigate();
  const data = useContext(TestContext);
  const goToDetail = () => {
    navigate(`/detail/${id + 1}`);
  };

  return (
    <div>
      <div className="col-md-4" onClick={goToDetail}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
          width="100%"
          alt="ProductList"
        />
        <h4>{title}</h4>
        <p>
          {content}&{price}
        </p>
      </div>
    </div>
  );
};

export default ProductList;
