import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Card } from "antd";
import { OrderContext } from "../../context/OrderContext/OrderState";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>You have no items in your cart</span>;
  }

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

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
      <span>
        <button onClick={() => createNewOrder(cart)}>Create order</button>
        <button onClick={() => clearCart()}>Clear cart</button>
      </span>
    </>
  );
};

export default Cart;
