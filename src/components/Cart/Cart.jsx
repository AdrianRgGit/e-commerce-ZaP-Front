import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Card } from "antd";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  if (cart.length <= 0) {
    return <span>You have no items in your cart</span>;
  }

  const cartItem = cart.map((product, i) => {
    return (
      <div className="cart" key={i}>
        <Card
          title={product.brand}
          style={{
            display: "flex",
            width: 300,
            margin: 10,
            padding: 10,
          }}
        >
          <img
            src={product.image}
            style={{
              maxWidth: 150,
            }}
            alt="product"
          />
          <span>{product.price} </span>

          <button onClick={() => addCart(product)}>Add cart</button>
        </Card>
      </div>
    );
  });

  return <div>{cartItem}</div>;
};

export default Cart;
