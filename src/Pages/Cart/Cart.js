import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = (props) => {
  const increase = () => {
    props.dispatch({ type: "countIncrease" });
  };

  const decrease = () => {
    props.dispatch({ type: "countDecrease" });
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>원산지</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.content}</td>
                <td>{ele.quantity}</td>
                <td>
                  <button onClick={increase}>+</button>
                  <button onClick={decrease}>-</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
//store에 있는 걸 가져화서
//파라미터에는 props로 변환해주는 함수
function cartToProps(state) {
  return {
    state,
  };
}

export default connect(cartToProps)(Cart);

// export default Cart;
