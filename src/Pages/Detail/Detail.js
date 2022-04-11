import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "../Main/Product/ProductData";
import "./detail.scss";

const Detail = () => {
  const [notice, setNotice] = useState(true);
  const [tab, setTab] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotice(false);
      console.log(1);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });
  const productData = PRODUCT_DATA;
  return (
    <div className="container">
      <div className="row">
        {notice && (
          <div className="my-alert2">
            <p> 재고가 얼마 남지 않았습니다</p>
          </div>
        )}
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${params.id}.jpg`}
            width="100%"
            alt="product"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{productData[params.id - 1].title}</h4>
          <p>{productData[params.id - 1].content}</p>
          <p>{productData[params.id - 1].price} 원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              navigate(-1);
            }}
          >
            이전페이지로
          </button>
        </div>
      </div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab((tab) => tab + 1);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            setTab((tab) => tab + 1);
          }}
        >
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Detail;
