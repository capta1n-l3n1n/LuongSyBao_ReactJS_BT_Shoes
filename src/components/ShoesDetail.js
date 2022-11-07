import React, { Component } from "react";
import style from "./ShoesDetail.module.css";

export default class ShoesDetail extends Component {
  state = { isShowDetail: false };
  // showDetail = () => {
  //   this.setState({
  //     isShowDetail: true,
  //   });
  // };

  // hideDetail = () => {
  //   this.setState({
  //     isShowDetail: true,
  //   });
  // };
  render() {
    const { name, image, price, description, quantity } =
      this.props.selectedItem;
    return (
      <div
      // className="position-fixed w-100 h-100 top-0 left-0"
      // style={{
      //   backgroundColor: "rgba(0, 0, 0, 0.8)",
      // }}
      >
        <div className={style.item}>
          <button onClick={this.props.hideDetail} className="btn btn-danger">
            X
          </button>
          <h4>Tên sản phẩm: {name}</h4>
          <img src={image} alt="" />
          <h4>Giá: {price}$</h4>
          <h4>Mô tả: {description}</h4>
          <h4>Số lượng: {quantity}</h4>
        </div>
      </div>
    );
  }
}
