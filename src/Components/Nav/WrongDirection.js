import React from "react";
import { Link } from "react-router-dom";

const WrongDirection = () => {
  return (
    <div>
      <h1>잘못된 경로입니다</h1>
      <button>
        <Link to="/">메인으로 가기</Link>
      </button>
    </div>
  );
};

export default WrongDirection;
