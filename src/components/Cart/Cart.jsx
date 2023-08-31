import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Card } from "antd";
import { OrderContext } from "../../context/OrderContext/OrderState";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <div className="text-container">
        <span className="cart-empty">You have no items in your cart</span>;
      </div>
    );
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
      <div className="card-container" key={product.id}>
        <Card className="card-style">
          <h3 className="card-title">{product.brand}</h3>
          <figure className="img-container">
            <img className="card-img" src={product.image} alt="product" />
          </figure>
          <div className="price-container">
            <span className="price">{product.price} €</span>
          </div>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div>{cartItem}</div>
      <div className="button-container">
        <button className="button" onClick={() => createNewOrder(cart)}>
          Create order
        </button>
        <button className="button" onClick={() => clearCart()}>
          Clear cart
        </button>
      </div>
    </>
  );
};

export default Cart;
