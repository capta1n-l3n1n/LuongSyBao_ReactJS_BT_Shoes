import React, { Component } from "react";

export default class ShoesCart extends Component {
  calcTotalMoney = () => {
    return this.props.cart.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
  };

  render() {
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div
          className="w-50 bg-white position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            paddingTop: "1rem",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{ top: 20, right: 20 }}
          >
            Đóng
          </button>
          <h1 className="text-center fs-3">Giỏ hàng</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình ảnh</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr key={item.product.id}>
                    <td className="pt-4">{item.product.id}</td>
                    <td className="pt-4">{item.product.name}</td>
                    <td>
                      <img
                        src={item.product.image}
                        style={{ width: "80px" }}
                        alt=""
                      />
                    </td>
                    <td className="pt-4">
                      <button
                        onClick={() => {
                          this.props.decreaseItem(item.product.id);
                        }}
                        className="btn btn-info"
                      >
                        -
                      </button>
                      <span className="fs-4 mx-2">{item.quantity}</span>
                      <button
                        onClick={() => {
                          this.props.increaseItem(item.product.id);
                        }}
                        className="btn btn-info"
                      >
                        +
                      </button>
                    </td>
                    <td className="pt-4">{item.product.price}$</td>
                    <td className="pt-4">
                      {item.product.price * item.quantity}$
                    </td>
                    <td className="pt-4">
                      <button
                        onClick={() => this.props.deleteItem(item.product.id)}
                        className="btn btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="m-2">
            <h3>Tổng tiền: {this.calcTotalMoney()}$</h3>
            <button className="btn btn-dark" onClick={this.props.checkout}>
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    );
  }
}
