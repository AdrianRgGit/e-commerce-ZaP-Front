import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Card, Col, Row, Spin } from "antd";
import "./Products.scss";

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
      <div className="card-container" key={product.id}>
        <Card className="card-style" title={product.brand}>
          <div className="button-container">
            <button className="button" onClick={() => addCart(product)}>
              +
            </button>
          </div>
          <figure className="img-container">
            <img
              className="card-img"
              src={product.image}
              style={{
                maxWidth: 150,
              }}
              alt="product"
            />
          </figure>
          <span>{product.price} €</span>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div>{product}</div>
    </>
  );
};

export default Products;
