import React, { Component } from "react";
import ShoesDetail from "./ShoesDetail";
import ShoesItem from "./ShoesItem";
import style from "./ShoesList.module.css";
import ShoesCart from "./ShoesCart";

export default class ShoesList extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    selectedItem: null,
    isShowCart: false,
    cart: [],
  };
  hideDetail = () => {
    this.setState({
      selectedItem: null,
    });
  };
  setSelectedItem = (dataFromChild) => {
    this.setState({ selectedItem: dataFromChild });
    console.log(this.selectedItem);
  };

  showCart = () => {
    this.setState({
      isShowCart: true,
    });
  };

  hideCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  addToCart = (product) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => product.id === item.product.id);
    const cartItem = { product: product, quantity: 1 };
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }
    this.setState({ cart: cloneCart }, () => {
      console.log(this.state.cart);
    });
  };

  calcTotalProduct = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  renderProduct() {
    const html = this.products.map((item) => {
      return (
        <div key={item.id} className={style.col}>
          <ShoesItem
            addToCart={this.addToCart}
            setSelectedItem={this.setSelectedItem}
            prod={item}
          />
        </div>
      );
    });

    return html;
  }
  //x??a item
  deleteItem = (id) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = cloneCart.findIndex((item) => id === item.product.id);
    cloneCart.splice(foundIndex, 1);

    this.setState({
      cart: cloneCart,
    });
  };
  //t??ng gi???m s??? l?????ng
  increaseItem = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.product.id);
    if (foundItem) {
      foundItem.quantity += 1;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  decreaseItem = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.product.id);
    if (foundItem) {
      foundItem.quantity -= 1;
    }
    this.setState({
      cart: cloneCart,
    });
  };

  //th??m n??t thanh to??n, t???ng ti???n =>clear gi??? h??ng
  checkout = () => {
    if (!window.confirm("X??c nh???n thanh to??n")) {
      return;
    }
    this.setState({ cart: [] });
  };
  render() {
    return (
      <div>
        <div className="text-end container my-1">
          <h3
            onClick={this.showCart}
            className="btn border-dark p-3"
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            ???? ({this.calcTotalProduct()})
          </h3>
        </div>
        <div className={style.container}>
          <h1 className="text-center">SHOES SHOP</h1>
          <div className={style.row}>{this.renderProduct()}</div>
        </div>

        {this.state.isShowCart && (
          <ShoesCart
            increaseItem={this.increaseItem}
            decreaseItem={this.decreaseItem}
            deleteItem={this.deleteItem}
            cart={this.state.cart}
            hideCart={this.hideCart}
            checkout={this.checkout}
          />
        )}

        {this.state.selectedItem ? (
          <ShoesDetail
            selectedItem={this.state.selectedItem}
            hideDetail={this.hideDetail}
          />
        ) : null}
      </div>
    );
  }
}
