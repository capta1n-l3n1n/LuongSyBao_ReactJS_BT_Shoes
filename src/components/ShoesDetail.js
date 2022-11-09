import React, { Component } from "react";
import style from "./ShoesDetail.module.css";

export default class ShoesDetail extends Component {
  state = { isShowDetail: false };

  render() {
    const { name, image, price, description, quantity } =
      this.props.selectedItem;
    return (
      <div className="text-center">
        <div className={style.item}>
          <button
            onClick={this.props.hideDetail}
            className="btn btn-light position-absolute offset-md-11"
          >
            ❌
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
