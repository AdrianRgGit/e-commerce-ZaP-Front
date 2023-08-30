import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Card, Spin } from "antd";
import "./Products.scss";

const Products = () => {
  const {
    products,
    cart,
    getProducts,
    showProductsDesc,
    showProductsAsc,
    addCart,
  } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <Spin size="large" />;
  }

  const productCards = products.map((product) => (
    <div className="card-container" key={product.id}>
      <Card className="card-style" title={product.brand}>
        <div className="button-container">
          <button className="button" onClick={() => addCart(product)}>
            +
          </button>
        </div>
        <figure className="img-container">
          <img className="card-img" src={product.image} alt="product" />
        </figure>
        <span>{product.price} €</span>
      </Card>
    </div>
  ));

  return <div className="products-container">{productCards}</div>;
};

export default Products;
