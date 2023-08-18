import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Card, Spin } from "antd";

const Products = () => {
  const { getProducts, products } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <Spin size="large" />;
  }

  const product = products.map((product) => {
    return (
      <Card
        title={product.brand}
        style={{
          display: "flex",
          width: 300,
          margin: 10,
          padding: 10,
        }}
      >
        <button>Add to cart</button>
        
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
