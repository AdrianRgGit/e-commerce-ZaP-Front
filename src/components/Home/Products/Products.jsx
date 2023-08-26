import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Card, Spin } from "antd";
import "./Products.scss"

const Products = () => {
  const { products, cart, getProducts, addCart } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <Spin size="large" />;
  }

  const product = products.map((product) => {
    return (
      <Card
        className="card-style"
        key={product.id}
        title={product.brand}
      >
        <button className="button" onClick={() => addCart(product)}>
          +
        </button>

        <img
          className="card-img"
          src={product.image}
          style={{
            maxWidth: 150,
          }}
          alt="product"
        />
        <span>{product.price} </span>
      </Card>
    );
  });

  return (
    <>
      <div>{product}</div>
    </>
  );
};

export default Products;
