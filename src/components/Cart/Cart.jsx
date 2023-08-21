import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Card } from "antd";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
        </Card>
      </div>
    );
  });

  return (
    <>
      <div>{cartItem}</div>
      <button onClick={() => clearCart()}>Clear cart</button>
    </>
  );
};

export default Cart;
