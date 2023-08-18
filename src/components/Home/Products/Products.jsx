import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Card, Spin } from "antd";

const Products = () => {
  const { products, cart, getProducts, addCart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <Spin size="large" />;
  }

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const product = products.map((product) => {
    return (
      <Card
        key={product.id}
        title={product.brand}
        style={{
          display: "flex",
          width: 300,
          margin: 10,
          padding: 10,
        }}
      >
        <button onClick={() => addCart(product)}>Add cart</button>

        <img
          src={product.image}
          style={{
            maxWidth: 150,
          }}
        />
        <span>{product.price} </span>
        <span>Card content</span>
      </Card>
    );
  });

  return <div>{product}</div>;
};

export default Products;
