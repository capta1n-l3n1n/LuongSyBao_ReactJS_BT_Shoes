import React, { Component } from "react";
import style from "./ShoesItem.module.css";

export default class ShoesItem extends Component {
  render() {
    return (
      <div className={style.item}>
        <img className={style.img} src={this.props.prod.image} alt="" />
        <div className={style.content}>
          <h3>{this.props.prod.name}</h3>
          <p>Price:{this.props.prod.price}$</p>
          <button
            className="btn btn-dark me-4"
            onClick={() => this.props.addToCart(this.props.prod)}
          >
            Add to card
          </button>
          <button
            className="btn btn-light border-dark"
            onClick={() => {
              this.props.setSelectedItem(this.props.prod);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
