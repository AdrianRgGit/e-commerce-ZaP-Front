import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Card, Spin } from "antd";
import "./Products.scss";

const Products = () => {
  const {
    products,
    cart,
    getProducts,
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
      <Card className="card-style">
        <h3 className="card-title">{product.brand}</h3>
        <div className="button-container">
          <button className="button" onClick={() => addCart(product)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAihJREFUSEvN1kuozVEUx/HPlQnlUVIeA0oGpCjFRN4imTBhKAPPPEaiyA3FEIUwMRMDxuSZgRRCyUSkiJLyiAmhVftoO+75P869x7HqP/ifvfb6rrX+a//26dEl6+kS138Bnoh4wj7jfie7kVfci30Z7BmW4nknEigCB+8RZnQanLd6FbYm4FzcLoAfSck9xI6qSbYarlF4i8E4jzUFAW9iHm5hfn/Bsf9cAn7HGLxvEXTAwXOyFu/FwX8FDs4TTE1tH48fiCT2V2hpUbKlArIepxIkBu5SG+CdWI6fWIEvEa9MuYbiDYbjGhYjpnxhVvFaTMBLnM1+v447eIcRuIxljfUycPgdxba0YTJCWHIrGq44DTGkYatxoQ54UgaLJJrPahH4CpbgI0bjWx1w+F7FInzCWHzNSm4FHodX6XMew/a8TVVaHf4rcTFtjIE7kwUJSR2JDwj1aliu/dPxuB3wILxOQhJHbFrJcYqCotqo+gFmNvtXrTj27cGBFGAdXhTA4+wfT+tbcKI/4Fy/Swr+vRzDFEMVw/WH1ak4Np7ExqrU5L+5L/+64PCfhSEV4KFQ95Ji/eVeFxwBYqpjiqP6+IvUbMOwKU356VYJ1gUfwq4U7EaTdDYYIZUL0sth7B6IVudBQ/TjmDVb3GCNglolV3pJNAfNb6to44Y+wHGbhV9YrPfZ7rqtjmBT0m11t2DAZid5fTpQ37jCMFdzaafiapFLvLoG/gVm52kfzmvAXgAAAABJRU5ErkJggg==" />
          </button>
        </div>
        <figure className="img-container">
          <img className="card-img" src={product.image} alt="product" />
        </figure>
        <div className="price-container">
          <span className="price">{product.price} €</span>
        </div>
      </Card>
    </div>
  ));

  return <div className="products-container">{productCards}</div>;
};

export default Products;
